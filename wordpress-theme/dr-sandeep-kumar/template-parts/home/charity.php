<?php
/**
 * Charity / philanthropy CTA with an amount-raised line.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$heading = dsk_mod( 'dsk_charity_heading' );
if ( ! $heading ) {
	return;
}
?>
<section class="charity" data-reveal>
	<div class="wrap charity__grid">
		<a class="charity__logo" href="<?php echo esc_url( dsk_mod( 'dsk_charity_url' ) ); ?>" target="_blank" rel="noopener noreferrer">
			<?php dsk_theme_mod_image( 'dsk_charity_logo', __( 'Charity logo', 'dsk-home' ), '', __( 'Charity logo', 'dsk-home' ) ); ?>
		</a>
		<div class="charity__body">
			<h2><?php echo esc_html( $heading ); ?></h2>
			<p class="charity__raised"><?php echo esc_html( dsk_mod( 'dsk_charity_raised' ) ); ?></p>
		</div>
		<div class="charity__media">
			<?php dsk_theme_mod_image( 'dsk_charity_photo', $heading, 'charity__photo', __( 'Photo', 'dsk-home' ) ); ?>
		</div>
	</div>
</section>
