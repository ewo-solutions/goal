<?php
/**
 * Single source of truth for every Customizer field: label, control type
 * and default value. inc/customizer.php reads this to register the
 * Customizer UI; dsk_mod() (in template-tags.php) reads it so every
 * template gets the same default a freshly-activated site would show in
 * the Customizer, without duplicating literal copy in two places.
 *
 * The page content itself (hero, services, testimonial, etc.) is built in
 * the Elementor editor, not here — this file only covers the coded chrome
 * around it: header/footer social links, the contact-form recipient, and
 * the footer copyright line.
 *
 * Field entries are: key => [ label, type, default ], type is one of
 * text|textarea|url|image.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dsk_home_content_schema() {
	return array(
		'contact' => array(
			'title'  => __( 'Contact', 'dsk-home' ),
			'fields' => array(
				'dsk_contact_email' => array( __( 'Enquiries go to this email', 'dsk-home' ), 'text', get_option( 'admin_email' ) ),
				'dsk_contact_phone' => array( __( 'Phone number', 'dsk-home' ), 'text', '' ),
			),
		),
		'social' => array(
			'title'  => __( 'Social Links', 'dsk-home' ),
			'fields' => array(
				'dsk_social_instagram' => array( __( 'Instagram URL', 'dsk-home' ), 'url', 'https://www.instagram.com/' ),
				'dsk_social_facebook'  => array( __( 'Facebook URL', 'dsk-home' ), 'url', 'https://www.facebook.com/' ),
				'dsk_social_linkedin'  => array( __( 'LinkedIn URL', 'dsk-home' ), 'url', 'https://www.linkedin.com/' ),
			),
		),
		'footer' => array(
			'title'  => __( 'Footer', 'dsk-home' ),
			'fields' => array(
				'dsk_footer_copyright'   => array( __( 'Copyright line', 'dsk-home' ), 'text', '© ' . gmdate( 'Y' ) . ' All rights reserved.' ),
				'dsk_footer_credit_text' => array( __( 'Credit text (optional, e.g. "Made by ...")', 'dsk-home' ), 'text', '' ),
				'dsk_footer_credit_url'  => array( __( 'Credit link', 'dsk-home' ), 'url', '' ),
			),
		),
	);
}

/**
 * Flattened key => default lookup, built once per request from the schema
 * above.
 */
function dsk_home_content_defaults() {
	static $defaults = null;
	if ( null !== $defaults ) {
		return $defaults;
	}
	$defaults = array();
	foreach ( dsk_home_content_schema() as $section ) {
		foreach ( $section['fields'] as $key => $field ) {
			$defaults[ $key ] = $field[2];
		}
	}
	return $defaults;
}
