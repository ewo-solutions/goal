<?php
/**
 * Theme bootstrap.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'DSK_THEME_VERSION', '1.0.0' );
define( 'DSK_THEME_DIR', get_template_directory() );
define( 'DSK_THEME_URI', get_template_directory_uri() );

/**
 * Theme setup.
 */
function dsk_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo', array(
		'height'      => 80,
		'width'       => 200,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'script', 'style' ) );
	add_theme_support( 'responsive-embeds' );

	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'dsk-home' ),
	) );
}
add_action( 'after_setup_theme', 'dsk_setup' );

/**
 * Styles and scripts.
 */
function dsk_assets() {
	wp_enqueue_style(
		'dsk-google-fonts',
		'https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&family=Sacramento&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'dsk-main', DSK_THEME_URI . '/assets/css/main.css', array(), DSK_THEME_VERSION );

	/* Home page styling. Only loaded on the front page — every other page
	 * runs through page.php and is styled by its own content/builder. */
	if ( is_front_page() ) {
		wp_enqueue_style(
			'dsk-home',
			DSK_THEME_URI . '/assets/css/home.css',
			array( 'dsk-main' ),
			DSK_THEME_VERSION
		);
	}

	wp_enqueue_script( 'dsk-main', DSK_THEME_URI . '/assets/js/main.js', array(), DSK_THEME_VERSION, true );
}

/**
 * Marks <html> with `js` before first paint. The scroll-reveal styles are
 * gated on that class, so content is visible from the start for no-JS
 * visitors and crawlers instead of being stuck at opacity 0.
 */
function dsk_js_flag() {
	echo '<script>document.documentElement.className+=" js";</script>' . "\n";
}
add_action( 'wp_head', 'dsk_js_flag', 1 );
add_action( 'wp_enqueue_scripts', 'dsk_assets' );

/**
 * [dsk_enquiry_form] — drop this into an Elementor Shortcode or HTML widget
 * to place the contact form anywhere on a page built in the Elementor
 * editor. Renders template-parts/enquiry-form.php, which posts to the
 * admin-post handler below.
 */
function dsk_enquiry_form_shortcode() {
	ob_start();
	require DSK_THEME_DIR . '/template-parts/enquiry-form.php';
	return ob_get_clean();
}
add_shortcode( 'dsk_enquiry_form', 'dsk_enquiry_form_shortcode' );

/**
 * Contact-form email handler, hooked to admin-post so it works for logged-in
 * and logged-out visitors alike. The [dsk_enquiry_form] shortcode above
 * posts here with action=dsk_enquiry.
 */
function dsk_handle_enquiry() {
	if ( ! isset( $_POST['dsk_enquiry_nonce'] ) || ! wp_verify_nonce( $_POST['dsk_enquiry_nonce'], 'dsk_enquiry' ) ) {
		wp_safe_redirect( add_query_arg( 'enquiry', 'error', wp_get_referer() ?: home_url( '/' ) ) );
		exit;
	}

	// Honeypot: real visitors never fill this hidden field in.
	if ( ! empty( $_POST['dsk_website'] ) ) {
		wp_safe_redirect( add_query_arg( 'enquiry', 'sent', wp_get_referer() ?: home_url( '/' ) ) );
		exit;
	}

	$first_name = isset( $_POST['first_name'] ) ? sanitize_text_field( wp_unslash( $_POST['first_name'] ) ) : '';
	$last_name  = isset( $_POST['last_name'] ) ? sanitize_text_field( wp_unslash( $_POST['last_name'] ) ) : '';
	$email      = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$phone      = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
	$enquiry    = isset( $_POST['enquiry'] ) ? sanitize_textarea_field( wp_unslash( $_POST['enquiry'] ) ) : '';

	if ( ! $first_name || ! $last_name || ! is_email( $email ) || ! $enquiry ) {
		wp_safe_redirect( add_query_arg( 'enquiry', 'error', wp_get_referer() ?: home_url( '/' ) ) );
		exit;
	}

	$to      = dsk_mod( 'dsk_contact_email' );
	$subject = sprintf( __( 'New enquiry from %s %s', 'dsk-home' ), $first_name, $last_name );
	$body    = implode( "\n", array(
		"Name: {$first_name} {$last_name}",
		"Email: {$email}",
		"Phone: {$phone}",
		'',
		$enquiry,
	) );
	$headers = array( 'Reply-To: ' . $email );

	wp_mail( $to, $subject, $body, $headers );

	wp_safe_redirect( add_query_arg( 'enquiry', 'sent', wp_get_referer() ?: home_url( '/' ) ) );
	exit;
}
add_action( 'admin_post_dsk_enquiry', 'dsk_handle_enquiry' );
add_action( 'admin_post_nopriv_dsk_enquiry', 'dsk_handle_enquiry' );

require DSK_THEME_DIR . '/inc/content-schema.php';
require DSK_THEME_DIR . '/inc/customizer.php';
require DSK_THEME_DIR . '/inc/template-tags.php';
require DSK_THEME_DIR . '/inc/home-content.php';
