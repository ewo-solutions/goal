<?php
/**
 * Dark gradient group — reference `.common-bg1`.
 * One diagonal gradient behind the partner strip, the about block and the
 * services grid, rather than a background per section.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$c        = dsk_home();
$partners = $c['partners'];
$about    = $c['about'];
$services = $c['services'];
?>
<div class="dark-group">

	<!-- Partner / press logos -->
	<section class="partners">
		<div class="shell">
			<div class="partners__track reveal">
				<?php foreach ( $partners as $i => $logo ) : ?>
					<a class="partners__item" href="<?php echo esc_url( $logo['url'] ); ?>"
					   target="_blank" rel="noopener noreferrer"
					   style="--reveal-delay:<?php echo (int) ( $i * 70 ); ?>ms">
						<img src="<?php echo esc_url( $logo['image'] ); ?>" alt="<?php echo esc_attr( $logo['name'] ); ?>" loading="lazy" />
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- About -->
	<section class="about">
		<div class="shell about__grid">
			<div class="about__media reveal">
				<img src="<?php echo esc_url( $about['image'] ); ?>" alt="<?php bloginfo( 'name' ); ?>" loading="lazy" />
				<?php if ( ! empty( $about['badges'] ) ) : ?>
					<div class="about__badges">
						<?php foreach ( $about['badges'] as $badge ) : ?>
							<img src="<?php echo esc_url( $badge ); ?>" alt="" loading="lazy" />
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>

			<div class="about__body reveal" style="--reveal-delay:140ms">
				<h2><?php echo wp_kses_post( $about['lead'] ); ?></h2>
				<p class="copy copy--light"><?php echo wp_kses_post( $about['body'] ); ?></p>

				<?php if ( ! empty( $about['handle'] ) ) : ?>
					<p class="about__insta">
						<?php echo dsk_social_icon( 'instagram' ); // phpcs:ignore ?>
						<span><?php echo esc_html( $about['handle'] ); ?></span>
					</p>
				<?php endif; ?>

				<a class="btn-pill" href="<?php echo esc_url( $about['cta']['url'] ); ?>" target="_blank" rel="noopener noreferrer">
					<?php echo esc_html( $about['cta']['label'] ); ?>
				</a>
			</div>
		</div>
	</section>

	<!-- Services -->
	<section class="services">
		<div class="shell">
			<p class="eyebrow reveal"><?php echo esc_html( $services['eyebrow'] ); ?></p>

			<div class="services__grid">
				<?php foreach ( $services['items'] as $i => $item ) : ?>
					<a class="services__card reveal" href="<?php echo esc_url( $item['url'] ); ?>"
					   style="--reveal-delay:<?php echo (int) ( $i * 100 ); ?>ms">
						<span class="services__thumb">
							<img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>" loading="lazy" />
						</span>
						<h2><?php echo esc_html( $item['title'] ); ?></h2>
						<?php if ( $item['sub'] ) : ?>
							<p><?php echo esc_html( $item['sub'] ); ?></p>
						<?php endif; ?>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

</div>
