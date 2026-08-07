<?php
/**
 * Video interviews — reference `.conversation-wrapp`: 60px heading over a
 * four-up grid of video stills with a play overlay.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$iv = dsk_home()['interviews'];
?>
<section class="interviews">
	<div class="shell">
		<h2 class="h-xl reveal"><?php echo esc_html( $iv['title'] ); ?></h2>

		<div class="interviews__grid">
			<?php foreach ( $iv['items'] as $i => $item ) : ?>
				<a class="interviews__card reveal" href="<?php echo esc_url( $item['url'] ); ?>"
				   target="_blank" rel="noopener noreferrer"
				   style="--reveal-delay:<?php echo (int) ( $i * 100 ); ?>ms">
					<span class="interviews__thumb">
						<img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['name'] ); ?>" loading="lazy" />
						<span class="interviews__play" aria-hidden="true">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5 21 12 4 21.5Z" /></svg>
						</span>
					</span>
					<p class="caption">
						<strong>A conversation with <?php echo esc_html( $item['name'] ); ?></strong>
						<?php echo esc_html( $item['role'] ); ?>
					</p>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>
