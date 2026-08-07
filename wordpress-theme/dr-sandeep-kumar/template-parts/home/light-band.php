<?php
/**
 * Off-white band — pull quote, story, achievements and the network CTA
 * share one continuous #f8f8f8 field, as in the reference.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$c       = dsk_home();
$t       = $c['testimonial'];
$story   = $c['story'];
$achieve = $c['achievements'];
$network = $c['network'];
?>
<div class="band-light">

	<section class="testimonial">
		<div class="shell reveal">
			<p class="testimonial__name"><?php echo esc_html( $t['name'] ); ?></p>
			<p class="testimonial__role"><?php echo wp_kses_post( $t['role'] ); ?></p>
			<p class="testimonial__quote">
				<svg viewBox="0 0 42 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M0 19.5C0 8.5 7.2 1 17.8 1v6.1c-6.7.5-11.9 4.8-11.9 12.4H15V31H0V19.5Zm24 0C24 8.5 31.2 1 41.8 1v6.1c-6.7.5-11.9 4.8-11.9 12.4H39V31H24V19.5Z" />
				</svg>
				<span><?php echo esc_html( $t['quote'] ); ?></span>
			</p>
			<p class="script script--navy testimonial__sig"><?php bloginfo( 'name' ); ?></p>
		</div>
	</section>

	<section class="story">
		<div class="shell story__grid">
			<div class="story__body reveal">
				<h2 class="h-xl story__title"><?php echo esc_html( $story['title'] ); ?></h2>
				<p class="script script--navy story__sig"><?php echo esc_html( $story['strapline'] ); ?></p>
				<?php foreach ( $story['body'] as $para ) : ?>
					<p class="copy copy--sm"><?php echo wp_kses_post( $para ); ?></p>
				<?php endforeach; ?>
				<a class="btn-arrow" href="<?php echo esc_url( $story['cta']['url'] ); ?>">
					<?php echo esc_html( $story['cta']['label'] ); ?>
				</a>
			</div>

			<div class="story__media reveal" style="--reveal-delay:140ms">
				<img src="<?php echo esc_url( $story['image'] ); ?>" alt="<?php echo esc_attr( $story['title'] ); ?>" loading="lazy" />
				<?php if ( ! empty( $story['badges'] ) ) : ?>
					<div class="story__badges">
						<?php foreach ( $story['badges'] as $badge ) : ?>
							<img src="<?php echo esc_url( $badge ); ?>" alt="" loading="lazy" />
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<section class="achievements">
		<div class="shell">
			<div class="achievements__grid">
				<?php foreach ( $achieve as $i => $item ) : ?>
					<div class="achievements__item reveal" style="--reveal-delay:<?php echo (int) ( $i * 90 ); ?>ms">
						<?php echo dsk_line_icon( $item['icon'] ); // phpcs:ignore ?>
						<p class="caption"><?php echo wp_kses_post( $item['text'] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="network">
		<div class="shell network__grid">
			<div class="network__media reveal">
				<img src="<?php echo esc_url( $network['image'] ); ?>" alt="<?php echo esc_attr( $network['title'] ); ?>" loading="lazy" />
			</div>
			<div class="network__body reveal" style="--reveal-delay:140ms">
				<h2 class="h-xl"><?php echo esc_html( $network['title'] ); ?></h2>
				<?php foreach ( $network['body'] as $para ) : ?>
					<p class="copy copy--sm"><?php echo wp_kses_post( $para ); ?></p>
				<?php endforeach; ?>
				<a class="btn-arrow" href="<?php echo esc_url( $network['cta']['url'] ); ?>">
					<?php echo esc_html( $network['cta']['label'] ); ?>
				</a>
			</div>
		</div>
	</section>

</div>
