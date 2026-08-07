<?php
/**
 * Video interviews — centred 60px heading over a three-up row with
 * circle prev/next controls either side, matching the reference carousel.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$iv = dsk_home()['interviews'];
?>
<section class="interviews">
	<div class="shell">
		<h2 class="h-xl reveal"><?php echo esc_html( $iv['title'] ); ?></h2>

		<div class="interviews__row reveal" style="--reveal-delay:120ms">
			<button type="button" class="interviews__nav" aria-label="<?php esc_attr_e( 'Previous', 'dsk-home' ); ?>">
				<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M6.5 1 2.5 5l4 4" /></svg>
			</button>

			<div class="interviews__grid">
				<?php foreach ( $iv['items'] as $item ) : ?>
					<a class="interviews__card" href="<?php echo esc_url( $item['url'] ); ?>" target="_blank" rel="noopener noreferrer">
						<span class="interviews__thumb">
							<img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['name'] ); ?>" loading="lazy" />
							<span class="interviews__play" aria-hidden="true">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 2.5 21 12 5 21.5Z" /></svg>
							</span>
						</span>
						<p>
							<strong>A conversation with <?php echo esc_html( $item['name'] ); ?></strong>
							<?php echo esc_html( $item['role'] ); ?>
						</p>
					</a>
				<?php endforeach; ?>
			</div>

			<button type="button" class="interviews__nav" aria-label="<?php esc_attr_e( 'Next', 'dsk-home' ); ?>">
				<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M3.5 1l4 4-4 4" /></svg>
			</button>
		</div>
	</div>
</section>
