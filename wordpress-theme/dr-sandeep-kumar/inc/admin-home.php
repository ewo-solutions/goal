<?php
/**
 * "Home Page" admin screen.
 *
 * Renders one form from the schema in inc/home-fields.php so the client can
 * change every image and every line of copy on the home page without touching
 * a template — and without a page builder rewriting the markup, which is what
 * keeps the layout pixel-identical to the design.
 *
 * Values are stored as a flat `dot.path => value` map in the DSK_HOME_OPTION
 * option and merged over the shipped defaults by dsk_home().
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

const DSK_HOME_CAP  = 'edit_theme_options';
const DSK_HOME_PAGE = 'dsk-home-content';

/**
 * Adds the top-level menu.
 */
function dsk_home_admin_menu() {
	add_menu_page(
		__( 'Home Page Content', 'dsk-home' ),
		__( 'Home Page', 'dsk-home' ),
		DSK_HOME_CAP,
		DSK_HOME_PAGE,
		'dsk_home_admin_page',
		'dashicons-admin-home',
		3
	);
}
add_action( 'admin_menu', 'dsk_home_admin_menu' );

/**
 * Registers the option and lets anyone who can edit the theme save it —
 * options.php would otherwise demand manage_options.
 */
function dsk_home_register_setting() {
	register_setting(
		'dsk_home_group',
		DSK_HOME_OPTION,
		array(
			'type'              => 'array',
			'sanitize_callback' => 'dsk_home_sanitize',
			'default'           => array(),
		)
	);
}
add_action( 'admin_init', 'dsk_home_register_setting' );

add_filter( 'option_page_capability_dsk_home_group', function () {
	return DSK_HOME_CAP;
} );

/**
 * Shortcut to the editor from the toolbar while viewing the home page.
 *
 * @param WP_Admin_Bar $bar Toolbar instance.
 */
function dsk_home_admin_bar( $bar ) {
	if ( is_admin() || ! is_front_page() || ! current_user_can( DSK_HOME_CAP ) ) {
		return;
	}

	$bar->add_node( array(
		'id'    => 'dsk-edit-home',
		'title' => __( 'Edit home content', 'dsk-home' ),
		'href'  => admin_url( 'admin.php?page=' . DSK_HOME_PAGE ),
	) );
}
add_action( 'admin_bar_menu', 'dsk_home_admin_bar', 80 );

/**
 * Media Library picker + repeater controls, loaded only on our screen.
 *
 * @param string $hook Current admin page hook.
 */
function dsk_home_admin_assets( $hook ) {
	if ( 'toplevel_page_' . DSK_HOME_PAGE !== $hook ) {
		return;
	}

	wp_enqueue_media();
	wp_enqueue_style( 'dsk-home-admin', DSK_THEME_URI . '/assets/css/admin-home.css', array(), DSK_THEME_VERSION );
	wp_enqueue_script( 'dsk-home-admin', DSK_THEME_URI . '/assets/js/admin-home.js', array( 'jquery' ), DSK_THEME_VERSION, true );
	wp_localize_script( 'dsk-home-admin', 'dskHomeAdmin', array(
		'chooseTitle'  => __( 'Choose an image', 'dsk-home' ),
		'chooseButton' => __( 'Use this image', 'dsk-home' ),
		'confirmRow'   => __( 'Remove this item?', 'dsk-home' ),
	) );
}
add_action( 'admin_enqueue_scripts', 'dsk_home_admin_assets' );

/**
 * Prepares a stored value for display in a form control. Defaults are written
 * with HTML entities (&rsquo;, &amp;) so they render correctly through both
 * esc_html() and wp_kses_post(); the client should see the real characters.
 *
 * @param string $value Raw value.
 * @return string
 */
function dsk_home_display( $value ) {
	return html_entity_decode( (string) $value, ENT_QUOTES, 'UTF-8' );
}

/**
 * Sanitises the submitted form against the schema. Anything not described in
 * inc/home-fields.php is discarded, so the option can only ever hold the
 * shape dsk_home() expects.
 *
 * @param mixed $input Raw $_POST value for the option.
 * @return array
 */
function dsk_home_sanitize( $input ) {
	$clean = array();

	if ( ! is_array( $input ) ) {
		return $clean;
	}

	foreach ( dsk_home_field_index() as $path => $def ) {
		if ( ! array_key_exists( $path, $input ) ) {
			continue;
		}

		$clean[ $path ] = dsk_home_sanitize_field( $input[ $path ], $def );
	}

	return $clean;
}

/**
 * Sanitises one value according to its field type.
 *
 * Must be idempotent: options.php sanitises once itself and update_option()
 * runs `sanitize_option_{$option}` again, so every branch has to cope with
 * being handed its own output a second time.
 *
 * @param mixed $value Raw value.
 * @param array $def   Field definition.
 * @return mixed
 */
function dsk_home_sanitize_field( $value, $def ) {
	switch ( $def['type'] ) {

		case 'textarea':
			return wp_kses_post( trim( (string) $value ) );

		case 'url':
		case 'image':
			$url = trim( (string) $value );
			// `#` is a legitimate placeholder link in this design.
			return ( '#' === $url ) ? $url : esc_url_raw( $url );

		case 'list_text':
			// One item per line from the textarea, or an already-split array
			// on the second pass.
			$lines = is_array( $value ) ? $value : preg_split( '/\R/', (string) $value );
			$lines = array_map( function ( $line ) {
				return wp_kses_post( trim( $line ) );
			}, $lines );
			return array_values( array_filter( $lines, 'strlen' ) );

		case 'list_image':
			$urls = is_array( $value ) ? $value : array();
			$urls = array_map( 'esc_url_raw', array_map( 'trim', $urls ) );
			return array_values( array_filter( $urls, 'strlen' ) );

		case 'repeater':
			$rows = array();
			foreach ( is_array( $value ) ? $value : array() as $row ) {
				if ( ! is_array( $row ) ) {
					continue;
				}
				$clean_row = array();
				foreach ( $def['fields'] as $key => $sub ) {
					$clean_row[ $key ] = dsk_home_sanitize_field( isset( $row[ $key ] ) ? $row[ $key ] : '', $sub );
				}
				// Drop rows the client emptied out entirely.
				$filled = array_filter( $clean_row, function ( $v ) {
					return is_array( $v ) ? (bool) $v : strlen( (string) $v );
				} );
				if ( $filled ) {
					$rows[] = $clean_row;
				}
			}
			return $rows;

		case 'text':
		default:
			return sanitize_text_field( (string) $value );
	}
}

/**
 * Restores the shipped defaults by deleting the option.
 */
function dsk_home_handle_reset() {
	check_admin_referer( 'dsk_home_reset' );

	if ( ! current_user_can( DSK_HOME_CAP ) ) {
		wp_die( esc_html__( 'You are not allowed to do that.', 'dsk-home' ) );
	}

	delete_option( DSK_HOME_OPTION );

	wp_safe_redirect( add_query_arg(
		array( 'page' => DSK_HOME_PAGE, 'dsk-reset' => '1' ),
		admin_url( 'admin.php' )
	) );
	exit;
}
add_action( 'admin_post_dsk_home_reset', 'dsk_home_handle_reset' );

/* -------------------------------------------------------------------------
 * Rendering
 * ---------------------------------------------------------------------- */

/**
 * The admin screen.
 */
function dsk_home_admin_page() {
	if ( ! current_user_can( DSK_HOME_CAP ) ) {
		return;
	}

	$content = dsk_home();
	?>
	<div class="wrap dsk-admin">
		<h1><?php esc_html_e( 'Home Page Content', 'dsk-home' ); ?></h1>

		<p class="dsk-admin__intro">
			<?php esc_html_e( 'Every image and every line of text on the home page, section by section. The layout is fixed by the design — changing text here will never break it.', 'dsk-home' ); ?>
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" target="_blank" rel="noopener"><?php esc_html_e( 'View the home page', 'dsk-home' ); ?></a>
		</p>

		<?php if ( isset( $_GET['dsk-reset'] ) ) : ?>
			<div class="notice notice-success is-dismissible"><p><?php esc_html_e( 'Home page content restored to the original design.', 'dsk-home' ); ?></p></div>
		<?php endif; ?>

		<?php settings_errors(); ?>

		<form method="post" action="options.php">
			<?php settings_fields( 'dsk_home_group' ); ?>

			<?php $first = true; ?>
			<?php foreach ( dsk_home_fields() as $key => $section ) : ?>
				<details class="dsk-sec" <?php echo $first ? 'open' : ''; ?>>
					<summary class="dsk-sec__head"><?php echo esc_html( $section['label'] ); ?></summary>
					<div class="dsk-sec__body">
						<?php if ( ! empty( $section['desc'] ) ) : ?>
							<p class="description dsk-sec__desc"><?php echo esc_html( $section['desc'] ); ?></p>
						<?php endif; ?>

						<?php foreach ( $section['fields'] as $path => $def ) : ?>
							<?php dsk_home_render_field( $path, $def, dsk_path_get( $content, $path, '' ) ); ?>
						<?php endforeach; ?>
					</div>
				</details>
				<?php $first = false; ?>
			<?php endforeach; ?>

			<?php submit_button( __( 'Save changes', 'dsk-home' ) ); ?>
		</form>

		<hr />
		<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>"
			onsubmit="return confirm('<?php echo esc_js( __( 'This replaces all home page content with the original design. Continue?', 'dsk-home' ) ); ?>');">
			<input type="hidden" name="action" value="dsk_home_reset" />
			<?php wp_nonce_field( 'dsk_home_reset' ); ?>
			<p class="description"><?php esc_html_e( 'Undo every change and go back to the content the site launched with.', 'dsk-home' ); ?></p>
			<?php submit_button( __( 'Restore original content', 'dsk-home' ), 'delete', 'submit', false ); ?>
		</form>
	</div>
	<?php
}

/**
 * Renders one labelled field row.
 *
 * @param string $path  Dot path.
 * @param array  $def   Field definition.
 * @param mixed  $value Current value.
 */
function dsk_home_render_field( $path, $def, $value ) {
	$name = DSK_HOME_OPTION . '[' . $path . ']';
	$id   = 'dsk-' . sanitize_html_class( str_replace( '.', '-', $path ) );
	?>
	<div class="dsk-field dsk-field--<?php echo esc_attr( $def['type'] ); ?>">
		<label class="dsk-field__label" for="<?php echo esc_attr( $id ); ?>"><?php echo esc_html( $def['label'] ); ?></label>
		<div class="dsk-field__control">
			<?php dsk_home_render_control( $name, $id, $def, $value ); ?>
		</div>
	</div>
	<?php
}

/**
 * Renders the control for a field type.
 *
 * @param string $name  Form input name.
 * @param string $id    Element id.
 * @param array  $def   Field definition.
 * @param mixed  $value Current value.
 */
function dsk_home_render_control( $name, $id, $def, $value ) {
	switch ( $def['type'] ) {

		case 'textarea':
			printf(
				'<textarea id="%s" name="%s" rows="4" class="large-text">%s</textarea>',
				esc_attr( $id ),
				esc_attr( $name ),
				esc_textarea( dsk_home_display( $value ) )
			);
			break;

		case 'url':
			printf(
				'<input type="text" id="%s" name="%s" value="%s" class="large-text code" />',
				esc_attr( $id ),
				esc_attr( $name ),
				esc_attr( $value )
			);
			break;

		case 'image':
			dsk_home_render_image( $name, $id, $value );
			break;

		case 'list_text':
			$lines = is_array( $value ) ? $value : array( $value );
			printf(
				'<textarea id="%s" name="%s" rows="%d" class="large-text">%s</textarea>',
				esc_attr( $id ),
				esc_attr( $name ),
				max( 3, count( $lines ) + 1 ),
				esc_textarea( dsk_home_display( implode( "\n", $lines ) ) )
			);
			echo '<p class="description">' . esc_html__( 'One per line.', 'dsk-home' ) . '</p>';
			break;

		case 'list_image':
			$images = is_array( $value ) ? $value : array();
			echo '<div class="dsk-imglist" data-name="' . esc_attr( $name ) . '" data-next="' . count( $images ) . '">';
			echo '<div class="dsk-imglist__items">';
			foreach ( $images as $i => $url ) {
				dsk_home_render_image( $name . '[' . $i . ']', $id . '-' . $i, $url, true );
			}
			echo '</div>';
			echo '<button type="button" class="button dsk-imglist__add">' . esc_html__( '+ Add image', 'dsk-home' ) . '</button>';
			echo '</div>';
			break;

		case 'repeater':
			dsk_home_render_repeater( $name, $id, $def, is_array( $value ) ? $value : array() );
			break;

		case 'text':
		default:
			printf(
				'<input type="text" id="%s" name="%s" value="%s" class="large-text" />',
				esc_attr( $id ),
				esc_attr( $name ),
				esc_attr( dsk_home_display( $value ) )
			);
			break;
	}
}

/**
 * Media Library picker: thumbnail, the URL, and choose/remove buttons.
 *
 * @param string $name       Form input name.
 * @param string $id         Element id.
 * @param string $value      Current image URL.
 * @param bool   $removable  Whether this picker can delete itself (list items).
 */
function dsk_home_render_image( $name, $id, $value, $removable = false ) {
	?>
	<div class="dsk-img<?php echo $removable ? ' dsk-img--removable' : ''; ?>">
		<div class="dsk-img__preview">
			<?php if ( $value ) : ?>
				<img src="<?php echo esc_url( $value ); ?>" alt="" />
			<?php endif; ?>
		</div>
		<div class="dsk-img__fields">
			<input type="text" id="<?php echo esc_attr( $id ); ?>" name="<?php echo esc_attr( $name ); ?>"
				value="<?php echo esc_attr( $value ); ?>" class="large-text code dsk-img__input" />
			<p class="dsk-img__actions">
				<button type="button" class="button dsk-img__pick"><?php esc_html_e( 'Choose image', 'dsk-home' ); ?></button>
				<?php if ( $removable ) : ?>
					<button type="button" class="button-link-delete dsk-img__delete"><?php esc_html_e( 'Remove', 'dsk-home' ); ?></button>
				<?php else : ?>
					<button type="button" class="button-link-delete dsk-img__clear"><?php esc_html_e( 'Clear', 'dsk-home' ); ?></button>
				<?php endif; ?>
			</p>
		</div>
	</div>
	<?php
}

/**
 * Repeating rows plus the blank-row template the JS clones.
 *
 * @param string $name Form input name.
 * @param string $id   Element id.
 * @param array  $def  Field definition, including its own `fields`.
 * @param array  $rows Current rows.
 */
function dsk_home_render_repeater( $name, $id, $def, $rows ) {
	$item_label = isset( $def['item_label'] ) ? $def['item_label'] : __( 'Item', 'dsk-home' );
	?>
	<div class="dsk-rep" data-item-label="<?php echo esc_attr( $item_label ); ?>" data-next="<?php echo count( $rows ); ?>">
		<div class="dsk-rep__rows">
			<?php foreach ( $rows as $i => $row ) : ?>
				<?php dsk_home_render_repeater_row( $name, $id, $def, $row, $i, $item_label ); ?>
			<?php endforeach; ?>
		</div>

		<script type="text/html" class="dsk-rep__template">
			<?php
			$blank = array();
			foreach ( $def['fields'] as $key => $sub ) {
				$blank[ $key ] = '';
			}
			dsk_home_render_repeater_row( $name, $id, $def, $blank, '__i__', $item_label );
			?>
		</script>

		<button type="button" class="button dsk-rep__add">
			<?php
			/* translators: %s: the kind of item, e.g. "Logo". */
			printf( esc_html__( '+ Add %s', 'dsk-home' ), esc_html( strtolower( $item_label ) ) );
			?>
		</button>
	</div>
	<?php
}

/**
 * One repeater row.
 *
 * @param string     $name       Parent input name.
 * @param string     $id         Parent element id.
 * @param array      $def        Field definition.
 * @param array      $row        Row values.
 * @param int|string $i          Row index, or `__i__` in the template.
 * @param string     $item_label Human name for a row.
 */
function dsk_home_render_repeater_row( $name, $id, $def, $row, $i, $item_label ) {
	?>
	<div class="dsk-rep__row">
		<div class="dsk-rep__bar">
			<span class="dsk-rep__title"><?php echo esc_html( $item_label ); ?></span>
			<span class="dsk-rep__tools">
				<button type="button" class="button-link dsk-rep__up" aria-label="<?php esc_attr_e( 'Move up', 'dsk-home' ); ?>">&uarr;</button>
				<button type="button" class="button-link dsk-rep__down" aria-label="<?php esc_attr_e( 'Move down', 'dsk-home' ); ?>">&darr;</button>
				<button type="button" class="button-link-delete dsk-rep__remove"><?php esc_html_e( 'Remove', 'dsk-home' ); ?></button>
			</span>
		</div>
		<div class="dsk-rep__fields">
			<?php foreach ( $def['fields'] as $key => $sub ) : ?>
				<?php
				$sub_name  = $name . '[' . $i . '][' . $key . ']';
				$sub_id    = $id . '-' . $i . '-' . $key;
				$sub_value = isset( $row[ $key ] ) ? $row[ $key ] : '';
				?>
				<div class="dsk-field dsk-field--<?php echo esc_attr( $sub['type'] ); ?>">
					<label class="dsk-field__label" for="<?php echo esc_attr( $sub_id ); ?>"><?php echo esc_html( $sub['label'] ); ?></label>
					<div class="dsk-field__control">
						<?php dsk_home_render_control( $sub_name, $sub_id, $sub, $sub_value ); ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
	<?php
}
