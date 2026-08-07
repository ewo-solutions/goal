<?php
/**
 * Hero — reference is a 670px full-bleed video band with no overlaid copy
 * (their typewriter headline is disabled in the live site's JS).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$hero = dsk_home()['hero'];
?>
<section class="hero">
	<div class="hero__media">
		<?php if ( $hero['video'] ) : ?>
			<video autoplay muted loop playsinline poster="<?php echo esc_url( $hero['image'] ); ?>">
				<source src="<?php echo esc_url( $hero['video'] ); ?>" type="video/mp4" />
			</video>
		<?php else : ?>
			<img src="<?php echo esc_url( $hero['image'] ); ?>" alt="" />
		<?php endif; ?>
	</div>
</section>
