<?php
/**
 * Enquiry + social mark + footer link row — the tail of the reference page.
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
		<p class="enquiry__intro"><?php echo esc_html( $enq['intro'] ); ?></p>
		<?php get_template_part( 'template-parts/enquiry-form' ); ?>
	</div>
</section>

<section class="social-row">
	<a href="<?php echo esc_url( $insta['url'] ); ?>" target="_blank" rel="noopener noreferrer"
	   aria-label="<?php esc_attr_e( 'Instagram', 'dsk-home' ); ?>" style="color:#00255c">
		<?php echo dsk_social_icon( 'instagram' ); // phpcs:ignore ?>
	</a>
</section>

<section class="flinker">
	<div class="shell">
		<div class="flinker__row">
			<?php
			$links = dsk_get_footer_links();
			$half  = (int) ceil( count( $links ) / 2 );
			foreach ( array_slice( $links, 0, $half ) as $l ) : ?>
				<a href="<?php echo esc_url( $l['url'] ); ?>"><?php echo esc_html( $l['label'] ); ?></a>
			<?php endforeach; ?>

			<span class="script script--navy flinker__sig"><?php echo esc_html( $c['signature'] ); ?></span>

			<?php foreach ( array_slice( $links, $half ) as $l ) : ?>
				<a href="<?php echo esc_url( $l['url'] ); ?>"><?php echo esc_html( $l['label'] ); ?></a>
			<?php endforeach; ?>
		</div>
	</div>
</section>
