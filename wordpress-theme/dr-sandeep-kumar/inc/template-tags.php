<?php
/**
 * Small view helpers shared by the theme's coded chrome (header, footer,
 * contact form).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * get_theme_mod() with the same default the Customizer control shows for
 * that key (from inc/content-schema.php), so a freshly-activated site
 * renders identically to what a site owner sees when they first open the
 * Customizer — no copy has to be duplicated (and kept in sync) in every
 * template.
 */
function dsk_mod( $key ) {
	$defaults = dsk_home_content_defaults();
	return get_theme_mod( $key, isset( $defaults[ $key ] ) ? $defaults[ $key ] : '' );
}

function dsk_social_icon( $name ) {
	$icons = array(
		'instagram' => '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.4.42.6.24 1 .53 1.5 1s.76.9 1 1.5c.17.4.36 1.2.42 2.4.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.42 2.4-.24.6-.53 1-1 1.5s-.9.76-1.5 1c-.4.17-1.2.36-2.4.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.4-.42-.6-.24-1-.53-1.5-1s-.76-.9-1-1.5c-.17-.4-.36-1.2-.42-2.4C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.4.24-.6.53-1 1-1.5s.9-.76 1.5-1c.4-.17 1.2-.36 2.4-.42C8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.75.07-1 .04-1.55.21-1.9.35-.48.19-.82.41-1.18.77-.36.36-.58.7-.77 1.18-.14.35-.31.9-.35 1.9C3 9.5 3 9.86 3 13s0 3.5.07 4.75c.04 1 .21 1.55.35 1.9.19.48.41.82.77 1.18.36.36.7.58 1.18.77.35.14.9.31 1.9.35C8.5 22 8.86 22 12 22s3.5 0 4.75-.07c1-.04 1.55-.21 1.9-.35.48-.19.82-.41 1.18-.77.36-.36.58-.7.77-1.18.14-.35.31-.9.35-1.9.07-1.25.07-1.61.07-4.75s0-3.5-.07-4.75c-.04-1-.21-1.55-.35-1.9-.19-.48-.41-.82-.77-1.18a3.26 3.26 0 0 0-1.18-.77c-.35-.14-.9-.31-1.9-.35C15.5 4 15.14 4 12 4zm0 3.6a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8zm0 1.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm5.6-2a1.26 1.26 0 1 1-2.52 0 1.26 1.26 0 0 1 2.52 0z"/></svg>',
		'facebook'  => '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C18.61 23.09 24 18.1 24 12.07z"/></svg>',
		'linkedin'  => '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
	);
	return isset( $icons[ $name ] ) ? $icons[ $name ] : '';
}

function dsk_social_links() {
	$links = array(
		'instagram' => dsk_mod( 'dsk_social_instagram' ),
		'facebook'  => dsk_mod( 'dsk_social_facebook' ),
		'linkedin'  => dsk_mod( 'dsk_social_linkedin' ),
	);
	$out = '';
	foreach ( $links as $name => $url ) {
		if ( ! $url ) {
			continue;
		}
		$out .= sprintf(
			'<a href="%1$s" target="_blank" rel="noopener noreferrer" aria-label="%2$s" class="dsk-social-link">%3$s</a>',
			esc_url( $url ),
			esc_attr( ucfirst( $name ) ),
			dsk_social_icon( $name )
		);
	}
	return $out;
}

/**
 * Outline line-icons used by the achievements strip. Stroke inherits from
 * CSS so they follow the section's colour.
 */
function dsk_line_icon( $name ) {
	$paths = array(
		'diamond'   => '<path d="M7 4h18l6 8-15 16L1 12l6-8Z"/><path d="M1 12h30M13 4l-4 8 7 16M19 4l4 8-7 16"/>',
		'megaphone' => '<path d="M4 12v8a2 2 0 0 0 2 2h3l3 8h4l-3-8h1l14 6V6L14 12H6a2 2 0 0 0-2 2Z"/>',
		'rosette'   => '<circle cx="16" cy="12" r="9"/><path d="M11 20l-4 11 9-4 9 4-4-11"/><circle cx="16" cy="12" r="4"/>',
	);
	$d = isset( $paths[ $name ] ) ? $paths[ $name ] : $paths['rosette'];
	return '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" '
		. 'stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">' . $d . '</svg>';
}
