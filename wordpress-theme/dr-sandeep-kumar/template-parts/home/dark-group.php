<?php
/**
 * Dark gradient group (reference .common-bg1) — partner strip + about.
 * The services tiles sit directly beneath, outside this gradient.
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

	<section class="partners">
		<div class="shell">
			<div class="partners__track reveal">
				<?php foreach ( $partners as $i => $logo ) : ?>
					<a class="partners__item" href="<?php echo esc_url( $logo['url'] ); ?>"
					   target="_blank" rel="noopener noreferrer"
					   style="--reveal-delay:<?php echo (int) ( $i * 60 ); ?>ms">
						<img src="<?php echo esc_url( $logo['image'] ); ?>" alt="<?php echo esc_attr( $logo['name'] ); ?>" loading="lazy" />
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="about">
		<div class="shell about__grid">
			<div class="about__media reveal">
				<img src="<?php echo esc_url( $about['image'] ); ?>" alt="<?php bloginfo( 'name' ); ?>" loading="lazy" />
				<div class="about__insta">
					<span class="about__handle"><?php echo esc_html( $about['handle'] ); ?></span>
					<a class="btn-pill" href="<?php echo esc_url( $about['cta']['url'] ); ?>" target="_blank" rel="noopener noreferrer">
						<?php echo esc_html( $about['cta']['label'] ); ?>
					</a>
				</div>
			</div>

			<div class="about__body reveal" style="--reveal-delay:140ms">
				<p class="script about__sig"><?php echo esc_html( $c['signature'] ); ?></p>
				<p class="copy copy--light"><?php echo wp_kses_post( $about['lead'] ); ?></p>
				<p class="copy copy--light"><?php echo wp_kses_post( $about['body'] ); ?></p>

				<div class="about__creds">
					<?php foreach ( $about['badges'] as $badge ) : ?>
						<img src="<?php echo esc_url( $badge ); ?>" alt="" loading="lazy" />
					<?php endforeach; ?>
					<span><?php echo esc_html( $about['credential'] ); ?></span>
				</div>
			</div>
		</div>
	</section>

</div>

<section class="services">
	<?php foreach ( $services as $tile ) : ?>
		<a class="services__tile" href="<?php echo esc_url( $tile['url'] ); ?>">
			<img src="<?php echo esc_url( $tile['image'] ); ?>" alt="<?php echo esc_attr( $tile['title'] ); ?>" loading="lazy" />
			<span class="services__label">
				<span>
					<?php if ( ! empty( $tile['sub'] ) ) : ?>
						<small><?php echo esc_html( $tile['sub'] ); ?></small>
					<?php endif; ?>
					<?php echo esc_html( $tile['title'] ); ?>
				</span>
			</span>
		</a>
	<?php endforeach; ?>
</section>
