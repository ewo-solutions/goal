<?php
/**
 * Footer quick-links list — the one piece of repeating content still owned
 * by the coded theme chrome rather than the Elementor-built page. Edit the
 * array below directly.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
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
