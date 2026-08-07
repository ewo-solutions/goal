<?php
/**
 * Misty backdrop group (reference .common-bg2) — the video-series CTA and
 * the charity block share one background.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$c       = dsk_home();
$series  = $c['series'];
$charity = $c['charity'];
?>
<div class="band-mist" style="background-image:url(<?php echo esc_url( $c['mist_background'] ); ?>)">

	<section class="series">
		<div class="shell reveal">
			<p class="script script--navy series__sig"><?php bloginfo( 'name' ); ?></p>
			<h2 class="h-lg"><?php echo esc_html( $series['title'] ); ?></h2>
			<p class="copy"><?php echo wp_kses_post( $series['body'] ); ?></p>
			<a class="btn-arrow" href="<?php echo esc_url( $series['cta']['url'] ); ?>">
				<?php echo esc_html( $series['cta']['label'] ); ?>
			</a>
		</div>
	</section>

	<section class="charity">
		<div class="shell charity__grid">
			<div class="charity__body reveal">
				<a class="charity__logo" href="<?php echo esc_url( $charity['url'] ); ?>" target="_blank" rel="noopener noreferrer">
					<img src="<?php echo esc_url( $charity['logo'] ); ?>" alt="" loading="lazy" />
				</a>
				<p class="charity__title"><?php echo esc_html( $charity['title'] ); ?></p>
				<p class="charity__raised">
					<span><?php echo esc_html( $charity['raised']['label'] ); ?></span>
					<strong><?php echo wp_kses_post( $charity['raised']['amount'] ); ?></strong>
				</p>
			</div>
			<div class="charity__media reveal" style="--reveal-delay:140ms">
				<img src="<?php echo esc_url( $charity['image'] ); ?>" alt="" loading="lazy" />
			</div>
		</div>
	</section>

</div>
