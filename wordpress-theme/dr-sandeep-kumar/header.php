<?php
/**
 * Site header: sticky nav bar that starts transparent (so it can sit over a
 * full-bleed hero built in Elementor) and turns solid navy on scroll (see
 * .site-header.is-scrolled in main.css).
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
	<div class="wrap site-header__row">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo">
			<?php
			if ( has_custom_logo() ) {
				the_custom_logo();
			} else {
				bloginfo( 'name' );
			}
			?>
		</a>

		<nav class="primary-nav" id="primary-nav" aria-label="<?php esc_attr_e( 'Primary', 'dsk-home' ); ?>">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'container'      => false,
					'menu_class'     => 'primary-nav__list',
					'depth'          => 2,
				) );
			} else {
				echo '<ul class="primary-nav__list">';
				echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'dsk-home' ) . '</a></li>';
				echo '</ul>';
			}
			?>
		</nav>

		<div class="site-header__actions">
			<div class="site-header__social"><?php echo dsk_social_links(); // phpcs:ignore ?></div>
			<?php /* Points at #enquiry — give the Elementor section/container holding [dsk_enquiry_form] a matching CSS ID (Advanced tab) so this scrolls to it. */ ?>
			<a class="btn btn--outline-light" href="#enquiry"><?php esc_html_e( 'Contact Me', 'dsk-home' ); ?></a>
			<button type="button" class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="primary-nav">
				<span></span><span></span><span></span>
				<span class="screen-reader-text"><?php esc_html_e( 'Menu', 'dsk-home' ); ?></span>
			</button>
		</div>
	</div>
</header>

<main id="primary" class="site-main">
