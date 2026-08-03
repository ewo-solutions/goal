<?php
/**
 * Services: four square cards on a navy background, edited via
 * dsk_get_services() in inc/home-content.php.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$services = dsk_get_services();
if ( ! $services ) {
	return;
}
?>
<section class="services" data-reveal>
	<div class="wrap">
		<p class="section-eyebrow section-eyebrow--light"><?php esc_html_e( 'What I Do', 'dsk-home' ); ?></p>
		<div class="services__grid">
			<?php foreach ( $services as $service ) : ?>
				<a class="services__card" href="<?php echo esc_url( $service['url'] ); ?>">
					<?php dsk_attachment_image( $service['image_id'], $service['label'], 'services__image', 'medium', $service['label'] ); ?>
					<span class="services__label">
						<?php echo esc_html( $service['label'] ); ?>
						<?php if ( ! empty( $service['sublabel'] ) ) : ?>
							<em><?php echo esc_html( $service['sublabel'] ); ?></em>
						<?php endif; ?>
					</span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>
