<?php
/**
 * Reusable photo + heading + copy + button banner, used for the course,
 * network and video-series calls to action. Pass $args:
 *   variant    string  used as a modifier class, e.g. "mastering"
 *   photo_mod  string  Customizer image setting key (optional)
 *   heading    string
 *   text       string
 *   cta_text   string
 *   cta_url    string
 *   image_side "left"|"right"
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$args = wp_parse_args( $args, array(
	'variant'    => '',
	'photo_mod'  => '',
	'heading'    => '',
	'text'       => '',
	'cta_text'   => __( 'Learn More', 'dsk-home' ),
	'cta_url'    => '#',
	'image_side' => 'right',
) );

if ( ! $args['heading'] && ! $args['text'] ) {
	return;
}
?>
<section class="cta-banner cta-banner--<?php echo esc_attr( $args['variant'] ); ?> cta-banner--image-<?php echo esc_attr( $args['image_side'] ); ?>" data-reveal>
	<div class="wrap cta-banner__grid">
		<div class="cta-banner__media">
			<?php
			if ( $args['photo_mod'] ) {
				dsk_theme_mod_image( $args['photo_mod'], $args['heading'], 'cta-banner__photo', $args['heading'] );
			} else {
				dsk_placeholder( 'cta-banner__photo', $args['heading'] );
			}
			?>
		</div>
		<div class="cta-banner__body">
			<?php if ( $args['heading'] ) : ?>
				<h2 class="cta-banner__heading"><?php echo esc_html( $args['heading'] ); ?></h2>
			<?php endif; ?>
			<?php if ( $args['text'] ) : ?>
				<p class="cta-banner__text"><?php echo esc_html( $args['text'] ); ?></p>
			<?php endif; ?>
			<a class="btn btn--pill" href="<?php echo esc_url( $args['cta_url'] ); ?>">
				<?php echo esc_html( $args['cta_text'] ); ?>
				<?php dsk_cta_arrow(); ?>
			</a>
		</div>
	</div>
</section>
