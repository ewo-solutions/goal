<?php
/**
 * Site header — mirrors the reference: a navy pill "☰ Menu" toggle pinned
 * top-left, and "Contact Me" plus social marks top-right. There is no
 * inline navigation bar; the menu opens as an overlay panel.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'dsk-home' ); ?></a>

<header class="site-header" id="site-header">
	<button type="button" class="menu-pill" id="nav-toggle" aria-expanded="false" aria-controls="nav-panel">
		<span class="menu-pill__bars" aria-hidden="true"><span></span><span></span><span></span></span>
		<span class="menu-pill__label"><?php esc_html_e( 'Menu', 'dsk-home' ); ?></span>
	</button>

	<div class="site-header__right">
		<a class="site-header__contact" href="#enquiry"><?php esc_html_e( 'Contact Me', 'dsk-home' ); ?></a>
		<span class="site-header__social"><?php echo dsk_social_links(); // phpcs:ignore ?></span>
	</div>
</header>

<!-- Slide-in navigation panel -->
<nav class="nav-panel" id="nav-panel" aria-label="<?php esc_attr_e( 'Primary', 'dsk-home' ); ?>">
	<?php
	if ( has_nav_menu( 'primary' ) ) {
		wp_nav_menu( array(
			'theme_location' => 'primary',
			'container'      => false,
			'menu_class'     => 'nav-panel__list',
			'depth'          => 2,
		) );
	} else {
		echo '<ul class="nav-panel__list">';
		echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'dsk-home' ) . '</a></li>';
		echo '</ul>';
	}
	?>
</nav>
<div class="nav-scrim" id="nav-scrim" hidden></div>

<main id="primary" class="site-main">
