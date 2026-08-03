<?php
/**
 * Fallback template. This is a home-page-only theme: every request renders
 * the same home page content rather than a 404 or blank screen.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require locate_template( 'front-page.php' );
