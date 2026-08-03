<?php
/**
 * Theme Customizer: everything a non-developer needs to personalise the
 * home page (headlines, body copy, contact details, social links and the
 * photo/video assets) lives here under Appearance → Customize → Home Page
 * Content. Field definitions live in inc/content-schema.php (shared with
 * the dsk_mod() helper so front-end defaults always match what the
 * Customizer shows). Content that repeats in a list — achievement cards,
 * video interviews, speaking locations, partner logos — is kept in
 * inc/home-content.php instead, since the Customizer has no native repeater
 * control; edit the arrays there directly.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dsk_customize_register( WP_Customize_Manager $wp_customize ) {

	$wp_customize->add_panel( 'dsk_home_content', array(
		'title'    => __( 'Home Page Content', 'dsk-home' ),
		'priority' => 30,
	) );

	foreach ( dsk_home_content_schema() as $id => $section ) {
		$wp_customize->add_section( "dsk_section_{$id}", array(
			'title' => $section['title'],
			'panel' => 'dsk_home_content',
		) );

		foreach ( $section['fields'] as $key => $field ) {
			list( $label, $type, $default ) = $field;

			$sanitize_callback = 'sanitize_text_field';
			if ( 'textarea' === $type ) {
				$sanitize_callback = 'sanitize_textarea_field';
			} elseif ( 'url' === $type || 'image' === $type ) {
				$sanitize_callback = 'esc_url_raw';
			}

			$wp_customize->add_setting( $key, array(
				'default'           => $default,
				'sanitize_callback' => $sanitize_callback,
				'transport'         => 'refresh',
			) );

			if ( 'image' === $type ) {
				$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, $key, array(
					'label'   => $label,
					'section' => "dsk_section_{$id}",
				) ) );
			} elseif ( 'textarea' === $type ) {
				$wp_customize->add_control( $key, array(
					'label'   => $label,
					'section' => "dsk_section_{$id}",
					'type'    => 'textarea',
				) );
			} else {
				$wp_customize->add_control( $key, array(
					'label'   => $label,
					'section' => "dsk_section_{$id}",
					'type'    => 'url' === $type ? 'url' : 'text',
				) );
			}
		}
	}
}
add_action( 'customize_register', 'dsk_customize_register' );
