<?php
/**
 * Repeating home-page content that doesn't fit the Customizer's single-value
 * controls. Edit the arrays below directly — swap in your own copy, links
 * and Media Library attachment IDs (use 0 to fall back to the placeholder
 * graphic) as needed.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function dsk_get_partner_logos() {
	return array(
		array( 'name' => 'MiSmile Network', 'url' => '#', 'image_id' => 0 ),
		array( 'name' => 'Invisalign', 'url' => '#', 'image_id' => 0 ),
		array( 'name' => 'Align Technology', 'url' => '#', 'image_id' => 0 ),
		array( 'name' => 'Dental Industry Awards', 'url' => '#', 'image_id' => 0 ),
	);
}

function dsk_get_services() {
	return array(
		array(
			'label' => __( 'MiSmile Network', 'dsk-home' ),
			'url'   => '#',
			'image_id' => 0,
		),
		array(
			'label' => __( 'The Growth Series', 'dsk-home' ),
			'url'   => '#',
			'image_id' => 0,
		),
		array(
			'label' => __( 'Book', 'dsk-home' ),
			'url'   => '#',
			'image_id' => 0,
		),
		array(
			'label'    => __( 'Podcast', 'dsk-home' ),
			'sublabel' => __( 'In conversation', 'dsk-home' ),
			'url'      => '#',
			'image_id' => 0,
		),
	);
}

function dsk_get_achievements() {
	return array(
		array( 'text' => __( 'Created thousands of beautiful smiles with Invisalign®', 'dsk-home' ), 'image_id' => 0 ),
		array( 'text' => __( 'One of a handful of Invisalign Diamond Apex Providers in Europe', 'dsk-home' ), 'image_id' => 0 ),
		array( 'text' => __( 'A highly respected speaker for Align Technology', 'dsk-home' ), 'image_id' => 0 ),
		array( 'text' => __( 'Highly Commended as Business Leader of the Year', 'dsk-home' ), 'image_id' => 0 ),
	);
}

function dsk_get_global_locations() {
	return array( 'London', 'Brazil', 'Mexico', 'India', 'Macau', 'Barcelona' );
}

function dsk_get_conversations() {
	return array(
		array( 'name' => 'Guest Name', 'role' => 'Their role and company', 'video_url' => '#', 'image_id' => 0 ),
		array( 'name' => 'Guest Name', 'role' => 'Their role and company', 'video_url' => '#', 'image_id' => 0 ),
		array( 'name' => 'Guest Name', 'role' => 'Their role and company', 'video_url' => '#', 'image_id' => 0 ),
		array( 'name' => 'Guest Name', 'role' => 'Their role and company', 'video_url' => '#', 'image_id' => 0 ),
	);
}

function dsk_get_footer_links() {
	return array(
		array( 'label' => __( 'About', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'Services', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'Network', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'Video Series', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'Contact', 'dsk-home' ), 'url' => '#' ),
	);
}
