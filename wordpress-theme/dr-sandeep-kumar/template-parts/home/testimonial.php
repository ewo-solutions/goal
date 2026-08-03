<?php
/**
 * Large pull-quote testimonial on a light background.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$quote = dsk_mod( 'dsk_testimonial_quote' );
$name  = dsk_mod( 'dsk_testimonial_name' );
if ( ! $quote ) {
	return;
}
?>
<section class="testimonial" data-reveal>
	<div class="wrap testimonial__grid">
		<div class="testimonial__media">
			<?php dsk_theme_mod_image( 'dsk_testimonial_photo', $name, 'testimonial__photo', __( 'Photo', 'dsk-home' ) ); ?>
		</div>
		<div class="testimonial__body">
			<svg class="testimonial__quote-mark" width="42" height="32" viewBox="0 0 42 32" fill="none" aria-hidden="true"><path d="M0 20.5C0 9 8 1 19 1v6.5C12 8 6.5 12.5 6.5 20.5H16V32H0V20.5ZM26 20.5C26 9 34 1 45 1v6.5c-7 .5-12.5 5-12.5 13H42V32H26V20.5Z" fill="currentColor" transform="translate(-4,0)"/></svg>
			<blockquote>
				<p><?php echo esc_html( $quote ); ?></p>
			</blockquote>
			<p class="testimonial__name"><?php echo esc_html( $name ); ?></p>
			<p class="testimonial__title"><?php echo esc_html( dsk_mod( 'dsk_testimonial_title' ) ); ?></p>
		</div>
	</div>
</section>
