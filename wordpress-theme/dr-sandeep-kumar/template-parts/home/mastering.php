<?php
/**
 * Course CTA — reference .mastering-wrapp: solid #032b6a, wordmark heading
 * with signature, copy left, photo right.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$m = dsk_home()['mastering'];
?>
<section class="mastering">
	<div class="shell mastering__grid">
		<div class="mastering__body reveal">
			<h2 class="h-md"><?php echo esc_html( $m['title'] ); ?></h2>
			<p class="script mastering__sig"><?php echo esc_html( $m['byline'] ); ?></p>
			<?php foreach ( $m['body'] as $para ) : ?>
				<p class="copy copy--light copy--sm"><?php echo wp_kses_post( $para ); ?></p>
			<?php endforeach; ?>
			<a class="btn-arrow btn-arrow--light" href="<?php echo esc_url( $m['cta']['url'] ); ?>">
				<?php echo esc_html( $m['cta']['label'] ); ?>
			</a>
		</div>
		<div class="mastering__media reveal" style="--reveal-delay:140ms">
			<img src="<?php echo esc_url( $m['image'] ); ?>" alt="<?php echo esc_attr( $m['title'] ); ?>" loading="lazy" />
		</div>
	</div>
</section>
