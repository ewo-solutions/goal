<?php
/**
 * About: portrait photo, intro/bio copy, an award badge, and an Instagram
 * follow callout.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<section class="about" data-reveal>
	<div class="wrap about__grid">
		<div class="about__media">
			<?php dsk_theme_mod_image( 'dsk_about_photo', get_bloginfo( 'name' ), 'about__photo', __( 'Portrait photo', 'dsk-home' ) ); ?>
			<div class="about__badge">
				<span class="about__badge-label"><?php echo esc_html( dsk_mod( 'dsk_about_award' ) ); ?></span>
			</div>
		</div>

		<div class="about__body">
			<p class="section-eyebrow"><?php esc_html_e( 'About', 'dsk-home' ); ?></p>
			<p class="about__intro"><?php echo esc_html( dsk_mod( 'dsk_about_intro' ) ); ?></p>
			<p class="about__bio"><?php echo esc_html( dsk_mod( 'dsk_about_bio' ) ); ?></p>

			<?php $instagram = dsk_mod( 'dsk_instagram_url' ); ?>
			<?php if ( $instagram ) : ?>
				<a class="about__instagram" href="<?php echo esc_url( $instagram ); ?>" target="_blank" rel="noopener noreferrer">
					<?php echo dsk_social_icon( 'instagram' ); // phpcs:ignore ?>
					<span><?php esc_html_e( 'Follow', 'dsk-home' ); ?></span>
				</a>
			<?php endif; ?>
		</div>
	</div>
</section>
