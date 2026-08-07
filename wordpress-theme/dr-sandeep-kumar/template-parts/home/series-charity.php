<?php
/**
 * Second off-white group — reference `.common-bg2`: the video-series CTA
 * and the charity block share one background field.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$c       = dsk_home();
$series  = $c['series'];
$charity = $c['charity'];
?>
<div class="band-light">

	<section class="series">
		<div class="shell reveal">
			<h2 class="h-lg"><?php echo esc_html( $series['title'] ); ?></h2>
			<p class="copy"><?php echo wp_kses_post( $series['body'] ); ?></p>
			<a class="btn-arrow" href="<?php echo esc_url( $series['cta']['url'] ); ?>">
				<?php echo esc_html( $series['cta']['label'] ); ?>
			</a>
		</div>
	</section>

	<section class="charity">
		<div class="shell charity__grid">
			<a class="charity__logo reveal" href="<?php echo esc_url( $charity['url'] ); ?>" target="_blank" rel="noopener noreferrer">
				<img src="<?php echo esc_url( $charity['logo'] ); ?>" alt="" loading="lazy" />
			</a>

			<div class="charity__body reveal" style="--reveal-delay:120ms">
				<h2 class="h-sm"><?php echo esc_html( $charity['title'] ); ?></h2>
				<p class="charity__raised">
					<span><?php echo esc_html( $charity['raised']['label'] ); ?></span>
					<?php echo wp_kses_post( $charity['raised']['amount'] ); ?>
				</p>
			</div>

			<div class="charity__media reveal" style="--reveal-delay:200ms">
				<img src="<?php echo esc_url( $charity['image'] ); ?>" alt="" loading="lazy" />
			</div>
		</div>
	</section>

</div>
