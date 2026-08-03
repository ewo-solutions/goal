<?php
/**
 * Full-width Instagram callout banner linking out to the profile.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$url = dsk_mod( 'dsk_instagram_banner_url' );
if ( ! $url ) {
	return;
}
?>
<section class="instagram-banner">
	<a href="<?php echo esc_url( $url ); ?>" target="_blank" rel="noopener noreferrer" class="instagram-banner__link">
		<?php dsk_theme_mod_image( 'dsk_instagram_banner_photo', __( 'Follow on Instagram', 'dsk-home' ), 'instagram-banner__image', __( 'Instagram banner image', 'dsk-home' ) ); ?>
		<span class="instagram-banner__overlay">
			<?php echo dsk_social_icon( 'instagram' ); // phpcs:ignore ?>
			<span><?php esc_html_e( 'Follow on Instagram', 'dsk-home' ); ?></span>
		</span>
	</a>
</section>
