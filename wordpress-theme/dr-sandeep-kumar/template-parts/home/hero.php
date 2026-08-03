<?php
/**
 * Hero: full-bleed video/poster background, right-aligned headline with a
 * JS typewriter cycling through role titles (strings supplied via
 * wp_localize_script in functions.php, edited there).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$video_url = get_theme_mod( 'dsk_hero_video_url', '' );
?>
<section class="hero" id="hero">
	<div class="hero__media">
		<?php if ( $video_url ) : ?>
			<video class="hero__video" autoplay muted loop playsinline poster="<?php echo esc_url( get_theme_mod( 'dsk_hero_poster', '' ) ); ?>">
				<source src="<?php echo esc_url( $video_url ); ?>" type="video/mp4" />
			</video>
		<?php elseif ( get_theme_mod( 'dsk_hero_poster', '' ) ) : ?>
			<img class="hero__poster" src="<?php echo esc_url( get_theme_mod( 'dsk_hero_poster', '' ) ); ?>" alt="" />
		<?php else : ?>
			<div class="dsk-placeholder hero__poster" aria-hidden="true"><span><?php esc_html_e( 'Hero background video / photo', 'dsk-home' ); ?></span></div>
		<?php endif; ?>
		<div class="hero__overlay"></div>
	</div>

	<div class="wrap hero__content">
		<p class="hero__eyebrow"><?php bloginfo( 'name' ); ?></p>
		<h1 class="hero__title">
			<span id="hero-typewriter" class="hero__typewriter" aria-live="polite"></span><span class="hero__cursor" aria-hidden="true">|</span>
		</h1>
	</div>
</section>
