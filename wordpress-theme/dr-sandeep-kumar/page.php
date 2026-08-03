<?php
/**
 * This is a home-page-only theme, so any WordPress Page also renders the
 * home page content rather than a separate, unstyled template.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require locate_template( 'front-page.php' );
