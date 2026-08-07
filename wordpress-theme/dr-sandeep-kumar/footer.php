<?php
/**
 * Site footer — the reference keeps this minimal: a cookie link, the
 * copyright line and a credit. The link row above it is part of the home
 * page template (template-parts/home/enquiry.php).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
</main>

<footer class="site-footer">
	<div class="shell site-footer__bottom">
		<p><?php echo esc_html( dsk_mod( 'dsk_footer_copyright' ) ); ?></p>
		<?php
		$credit_text = dsk_mod( 'dsk_footer_credit_text' );
		$credit_url  = dsk_mod( 'dsk_footer_credit_url' );
		if ( $credit_text ) :
			?>
			<p>
				<?php if ( $credit_url ) : ?>
					<a href="<?php echo esc_url( $credit_url ); ?>" target="_blank" rel="noopener noreferrer"><?php echo esc_html( $credit_text ); ?></a>
				<?php else : ?>
					<?php echo esc_html( $credit_text ); ?>
				<?php endif; ?>
			</p>
		<?php endif; ?>
	</div>
</footer>

<button type="button" class="back-to-top" id="back-to-top" aria-label="<?php esc_attr_e( 'Back to top', 'dsk-home' ); ?>">
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
</button>

<?php wp_footer(); ?>
</body>
</html>
