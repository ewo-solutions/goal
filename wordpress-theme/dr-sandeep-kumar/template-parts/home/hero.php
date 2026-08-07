<?php
/**
 * Hero — reference `.banner-wrapp`: 670px tall, headline bottom-right over
 * a full-bleed video (or still) with a dark scrim.
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

	<div class="shell hero__inner">
		<h1 class="hero__title"><?php echo wp_kses_post( $hero['title'] ); ?></h1>
	</div>
</section>
