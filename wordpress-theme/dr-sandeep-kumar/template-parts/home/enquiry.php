<?php
/**
 * Enquiry — reference `.enquiry-wrapp`: centred 40px heading over the
 * pill-field contact form, followed by the Instagram banner.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$c     = dsk_home();
$enq   = $c['enquiry'];
$insta = $c['instagram'];
?>
<section class="enquiry" id="enquiry">
	<div class="shell reveal">
		<h2 class="h-lg"><?php echo esc_html( $enq['title'] ); ?></h2>
		<?php get_template_part( 'template-parts/enquiry-form' ); ?>
	</div>
</section>

<section class="insta-section">
	<a class="insta-banner" href="<?php echo esc_url( $insta['url'] ); ?>" target="_blank" rel="noopener noreferrer">
		<img src="<?php echo esc_url( $insta['image'] ); ?>" alt="" loading="lazy" />
		<span class="insta-banner__overlay">
			<?php echo dsk_social_icon( 'instagram' ); // phpcs:ignore ?>
			<span><?php esc_html_e( 'Follow on Instagram', 'dsk-home' ); ?></span>
		</span>
	</a>
</section>
