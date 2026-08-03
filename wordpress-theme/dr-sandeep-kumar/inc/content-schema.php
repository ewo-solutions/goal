<?php
/**
 * Single source of truth for every Customizer field: label, control type
 * and default value. inc/customizer.php reads this to register the
 * Customizer UI; dsk_mod() (in template-tags.php) reads it so every
 * template part gets the same default a freshly-activated site would show
 * in the Customizer, without duplicating literal copy in two places.
 *
 * Field entries are: key => [ label, type, default ], type is one of
 * text|textarea|url|image.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dsk_home_content_schema() {
	return array(
		'hero' => array(
			'title'  => __( 'Hero', 'dsk-home' ),
			'fields' => array(
				'dsk_hero_video_url' => array( __( 'Background video URL (mp4 or Vimeo embed)', 'dsk-home' ), 'url', '' ),
				'dsk_hero_poster'    => array( __( 'Background poster image (shown while video loads / on mobile)', 'dsk-home' ), 'image', '' ),
			),
		),
		'about' => array(
			'title'  => __( 'About', 'dsk-home' ),
			'fields' => array(
				'dsk_about_photo'   => array( __( 'Portrait photo', 'dsk-home' ), 'image', '' ),
				'dsk_about_intro'   => array( __( 'Intro paragraph', 'dsk-home' ), 'textarea', "Dr Sandeep Kumar, the behind-the-scenes leader of MiSmile, is stepping forward to reveal how you can build your million-pound Invisalign business in this never-been-shared-before, exclusive experience." ),
				'dsk_about_bio'     => array( __( 'Bio paragraph', 'dsk-home' ), 'textarea', "Originally from India, Dr Sandeep came to the UK in 1999 and qualified with the GDC in 2000. On the lookout for his next opportunity and recognising the huge business potential Invisalign could bring, he bought his first practice and built it into the UK's first Invisalign-only clinic – MiSmile Birmingham. Now, MiSmile Birmingham is just one of Sandeep's million-pound practices." ),
				'dsk_about_award'   => array( __( 'Award badge caption', 'dsk-home' ), 'text', 'Invisalign Diamond Apex Provider' ),
				'dsk_instagram_url' => array( __( 'Instagram profile URL', 'dsk-home' ), 'url', 'https://www.instagram.com/' ),
			),
		),
		'mastering' => array(
			'title'  => __( 'Course CTA (Mastering...)', 'dsk-home' ),
			'fields' => array(
				'dsk_mastering_photo'    => array( __( 'Photo', 'dsk-home' ), 'image', '' ),
				'dsk_mastering_heading'  => array( __( 'Heading', 'dsk-home' ), 'text', 'Mastering Your Business' ),
				'dsk_mastering_text'     => array( __( 'Body copy', 'dsk-home' ), 'textarea', 'A one day, fully immersive education experience that will give you the tools to independent practice growth, whatever your goal may be.' ),
				'dsk_mastering_cta_text' => array( __( 'Button text', 'dsk-home' ), 'text', 'Apply Here' ),
				'dsk_mastering_cta_url'  => array( __( 'Button link', 'dsk-home' ), 'url', '#' ),
			),
		),
		'testimonial' => array(
			'title'  => __( 'Testimonial', 'dsk-home' ),
			'fields' => array(
				'dsk_testimonial_photo' => array( __( 'Photo', 'dsk-home' ), 'image', '' ),
				'dsk_testimonial_name'  => array( __( 'Name', 'dsk-home' ), 'text', 'Sandeep Kumar' ),
				'dsk_testimonial_title' => array( __( 'Title', 'dsk-home' ), 'text', 'CEO & Founder' ),
				'dsk_testimonial_quote' => array( __( 'Quote', 'dsk-home' ), 'textarea', 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.' ),
			),
		),
		'trailblazer' => array(
			'title'  => __( 'Story / Trailblazer', 'dsk-home' ),
			'fields' => array(
				'dsk_trailblazer_photo'   => array( __( 'Photo', 'dsk-home' ), 'image', '' ),
				'dsk_trailblazer_kicker'  => array( __( 'Kicker line', 'dsk-home' ), 'text', 'From India to Invisalign' ),
				'dsk_trailblazer_heading' => array( __( 'Heading', 'dsk-home' ), 'textarea', 'Sandeep can only be described as a trailblazer in the world of Invisalign.' ),
				'dsk_trailblazer_text'    => array( __( 'Body copy (one paragraph per line)', 'dsk-home' ), 'textarea', "Originally from India, Sandeep came to the UK in 1999. He qualified with the GDC in 2000 and, on the lookout for his next opportunity, bought his first practice in 2003.\nMore than 20 years later, Sandeep has built his success around the clear aligner brand and has inspired and encouraged those around him to do the same." ),
				'dsk_trailblazer_cta_url' => array( __( 'Learn more link', 'dsk-home' ), 'url', '#' ),
			),
		),
		'practices' => array(
			'title'  => __( 'Network CTA', 'dsk-home' ),
			'fields' => array(
				'dsk_practices_photo'   => array( __( 'Photo', 'dsk-home' ), 'image', '' ),
				'dsk_practices_heading' => array( __( 'Heading', 'dsk-home' ), 'textarea', 'Comprising of more than 100 independent dental practices' ),
				'dsk_practices_text'    => array( __( 'Body copy', 'dsk-home' ), 'textarea', 'An affordable, 360 degree solution providing everything you need for scalable, long term growth.' ),
				'dsk_practices_cta_url' => array( __( 'Learn more link', 'dsk-home' ), 'url', '#' ),
			),
		),
		'global' => array(
			'title'  => __( 'Global Speaker', 'dsk-home' ),
			'fields' => array(
				'dsk_global_heading' => array( __( 'Heading', 'dsk-home' ), 'text', 'Global Speaker' ),
				'dsk_global_text'    => array( __( 'Subheading', 'dsk-home' ), 'text', 'Sandeep has spoken and lectured globally' ),
			),
		),
		'series' => array(
			'title'  => __( 'Video Series CTA', 'dsk-home' ),
			'fields' => array(
				'dsk_series_heading'  => array( __( 'Heading', 'dsk-home' ), 'text', 'The Growth Series' ),
				'dsk_series_text'     => array( __( 'Body copy', 'dsk-home' ), 'textarea', 'Sandeep shares his journey, his successes, his failures, and the learnings that have helped him build a consistent, growing practice.' ),
				'dsk_series_cta_text' => array( __( 'Button text', 'dsk-home' ), 'text', 'Watch the Series' ),
				'dsk_series_cta_url'  => array( __( 'Button link', 'dsk-home' ), 'url', '#' ),
			),
		),
		'charity' => array(
			'title'  => __( 'Charity CTA', 'dsk-home' ),
			'fields' => array(
				'dsk_charity_photo'   => array( __( 'Photo', 'dsk-home' ), 'image', '' ),
				'dsk_charity_logo'    => array( __( 'Charity logo', 'dsk-home' ), 'image', '' ),
				'dsk_charity_heading' => array( __( 'Heading', 'dsk-home' ), 'textarea', 'Operation Smile helps change the smiles and lives of children around the world.' ),
				'dsk_charity_raised'  => array( __( 'Amount raised line', 'dsk-home' ), 'text', 'We have raised £132,657' ),
				'dsk_charity_url'     => array( __( 'Charity link', 'dsk-home' ), 'url', '#' ),
			),
		),
		'instagram_banner' => array(
			'title'  => __( 'Instagram Banner', 'dsk-home' ),
			'fields' => array(
				'dsk_instagram_banner_photo' => array( __( 'Banner image', 'dsk-home' ), 'image', '' ),
				'dsk_instagram_banner_url'   => array( __( 'Instagram profile URL', 'dsk-home' ), 'url', 'https://www.instagram.com/' ),
			),
		),
		'contact' => array(
			'title'  => __( 'Contact', 'dsk-home' ),
			'fields' => array(
				'dsk_contact_heading' => array( __( 'Heading', 'dsk-home' ), 'text', 'Have a question? Talk to us!' ),
				'dsk_contact_email'   => array( __( 'Enquiries go to this email', 'dsk-home' ), 'text', get_option( 'admin_email' ) ),
				'dsk_contact_phone'   => array( __( 'Phone number', 'dsk-home' ), 'text', '' ),
			),
		),
		'social' => array(
			'title'  => __( 'Social Links', 'dsk-home' ),
			'fields' => array(
				'dsk_social_instagram' => array( __( 'Instagram URL', 'dsk-home' ), 'url', '' ),
				'dsk_social_facebook'  => array( __( 'Facebook URL', 'dsk-home' ), 'url', '' ),
				'dsk_social_linkedin'  => array( __( 'LinkedIn URL', 'dsk-home' ), 'url', '' ),
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
