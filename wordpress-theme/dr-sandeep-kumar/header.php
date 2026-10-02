<?php
/**
 * Site header — logo top-left, inline navigation tabs, then the social
 * marks on the right. Below 980px the tabs collapse into the navy pill
 * toggle, which opens the same links as a slide-in panel.
 *
 * The tabs come from the "Primary Menu" (Appearance → Menus). Until one is
 * assigned, dsk_header_nav_fallback() renders a sensible default set so the
 * header is never empty. "Contact Me" lives in that list, so the header
 * carries no separate contact link.
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
	<div class="site-header__inner">

		<div class="site-brand">
			<?php if ( has_custom_logo() ) : ?>
				<?php the_custom_logo(); ?>
			<?php else : ?>
				<a class="site-brand__text" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
				</a>
			<?php endif; ?>
		</div>

		<nav class="site-nav" aria-label="<?php esc_attr_e( 'Primary', 'dsk-home' ); ?>">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'container'      => false,
					'menu_class'     => 'site-nav__list',
					'depth'          => 1,
				) );
			} else {
				dsk_header_nav_fallback( 'site-nav__list' );
			}
			?>
		</nav>

		<div class="site-header__right">
			<span class="site-header__social"><?php echo dsk_social_links(); // phpcs:ignore ?></span>

			<button type="button" class="menu-pill" id="nav-toggle" aria-expanded="false" aria-controls="nav-panel">
				<span class="menu-pill__bars" aria-hidden="true"><span></span><span></span><span></span></span>
				<span class="menu-pill__label"><?php esc_html_e( 'Menu', 'dsk-home' ); ?></span>
			</button>
		</div>

	</div>
</header>

<!-- Slide-in navigation panel (the small-screen view of the tabs above) -->
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
		dsk_header_nav_fallback( 'nav-panel__list' );
	}
	?>
</nav>
<div class="nav-scrim" id="nav-scrim" hidden></div>

<main id="primary" class="site-main">
