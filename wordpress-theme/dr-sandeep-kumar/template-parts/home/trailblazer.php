<?php
/**
 * Longer-form bio block ("From India to Invisalign" style story), with
 * multi-paragraph copy split on newlines.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$heading    = dsk_mod( 'dsk_trailblazer_heading' );
$paragraphs = array_filter( array_map( 'trim', explode( "\n", dsk_mod( 'dsk_trailblazer_text' ) ) ) );
?>
<section class="trailblazer" data-reveal>
	<div class="wrap trailblazer__grid">
		<div class="trailblazer__body">
			<p class="section-eyebrow"><?php echo esc_html( dsk_mod( 'dsk_trailblazer_kicker' ) ); ?></p>
			<h2 class="trailblazer__heading"><?php echo esc_html( $heading ); ?></h2>
			<?php foreach ( $paragraphs as $paragraph ) : ?>
				<p><?php echo esc_html( $paragraph ); ?></p>
			<?php endforeach; ?>
			<a class="btn btn--text" href="<?php echo esc_url( dsk_mod( 'dsk_trailblazer_cta_url' ) ); ?>">
				<?php esc_html_e( 'Learn More', 'dsk-home' ); ?>
				<?php dsk_cta_arrow(); ?>
			</a>
		</div>
		<div class="trailblazer__media">
			<?php dsk_theme_mod_image( 'dsk_trailblazer_photo', $heading, 'trailblazer__photo', __( 'Photo', 'dsk-home' ) ); ?>
		</div>
	</div>
</section>
