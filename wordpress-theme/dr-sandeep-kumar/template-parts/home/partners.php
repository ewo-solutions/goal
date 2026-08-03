<?php
/**
 * Partner / press logo strip. A CSS-driven marquee (see .marquee in
 * main.css) built by duplicating the list once so it can loop seamlessly.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$logos = dsk_get_partner_logos();
if ( ! $logos ) {
	return;
}
?>
<section class="partners" aria-label="<?php esc_attr_e( 'Partners and press', 'dsk-home' ); ?>">
	<div class="marquee">
		<div class="marquee__track">
			<?php
			foreach ( array( 1, 2 ) as $pass ) :
				foreach ( $logos as $logo ) :
					?>
					<a class="marquee__item" href="<?php echo esc_url( $logo['url'] ); ?>" target="_blank" rel="noopener noreferrer">
						<?php dsk_attachment_image( $logo['image_id'], $logo['name'], 'marquee__logo', 'medium', $logo['name'] ); ?>
					</a>
					<?php
				endforeach;
			endforeach;
			?>
		</div>
	</div>
</section>
