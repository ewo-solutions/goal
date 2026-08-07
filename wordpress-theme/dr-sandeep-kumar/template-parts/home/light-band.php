<?php
/**
 * Off-white band — reference groups the pull quote, the story block, the
 * achievements strip and the network CTA on one continuous #f8f8f8 field.
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

	<!-- Pull quote -->
	<section class="testimonial">
		<div class="shell">
			<div class="testimonial__inner reveal">
				<div class="testimonial__mark" aria-hidden="true">
					<svg viewBox="0 0 42 32" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 20.5C0 9 7.6 1 18.6 1v6.4c-7 .5-12.4 5-12.4 13H16V32H0V20.5Zm25 0C25 9 32.6 1 43.6 1v6.4c-7 .5-12.4 5-12.4 13H41V32H25V20.5Z" />
					</svg>
				</div>
				<div class="testimonial__body">
					<p class="testimonial__quote">&ldquo;<?php echo esc_html( $t['quote'] ); ?>&rdquo;</p>
					<p class="testimonial__name"><?php echo esc_html( $t['name'] ); ?></p>
					<p class="testimonial__role"><?php echo wp_kses_post( $t['role'] ); ?></p>
				</div>
			</div>
		</div>
	</section>

	<!-- Story -->
	<section class="story">
		<div class="shell story__grid">
			<div class="story__body reveal">
				<p class="h-display"><?php echo esc_html( $story['display'] ); ?></p>
				<h2 class="h-xl"><?php echo esc_html( $story['title'] ); ?></h2>
				<?php foreach ( $story['body'] as $para ) : ?>
					<p class="copy"><?php echo wp_kses_post( $para ); ?></p>
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

	<!-- Achievements -->
	<section class="achievements">
		<div class="shell">
			<div class="achievements__grid">
				<?php foreach ( $achieve as $i => $item ) : ?>
					<div class="achievements__item reveal" style="--reveal-delay:<?php echo (int) ( $i * 90 ); ?>ms">
						<img src="<?php echo esc_url( $item['image'] ); ?>" alt="" loading="lazy" />
						<p class="caption"><?php echo wp_kses_post( $item['text'] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- Network CTA -->
	<section class="network">
		<div class="shell network__grid">
			<div class="network__media reveal">
				<img src="<?php echo esc_url( $network['image'] ); ?>" alt="<?php echo esc_attr( $network['title'] ); ?>" loading="lazy" />
			</div>
			<div class="network__body reveal" style="--reveal-delay:140ms">
				<h2 class="h-xl"><?php echo esc_html( $network['title'] ); ?></h2>
				<?php foreach ( $network['body'] as $para ) : ?>
					<p class="copy"><?php echo wp_kses_post( $para ); ?></p>
				<?php endforeach; ?>
				<a class="btn-arrow" href="<?php echo esc_url( $network['cta']['url'] ); ?>">
					<?php echo esc_html( $network['cta']['label'] ); ?>
				</a>
			</div>
		</div>
	</section>

</div>
