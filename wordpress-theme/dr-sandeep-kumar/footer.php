<?php
/**
 * Site footer: quick links + copyright/credit line. Closes the #primary
 * <main> opened in header.php.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
</main>

<footer class="site-footer">
	<div class="wrap site-footer__top">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-footer__logo">
			<?php
			if ( has_custom_logo() ) {
				the_custom_logo();
			} else {
				bloginfo( 'name' );
			}
			?>
		</a>

		<ul class="site-footer__links">
			<?php foreach ( dsk_get_footer_links() as $link ) : ?>
				<li><a href="<?php echo esc_url( $link['url'] ); ?>"><?php echo esc_html( $link['label'] ); ?></a></li>
			<?php endforeach; ?>
		</ul>

		<div class="site-footer__social"><?php echo dsk_social_links(); // phpcs:ignore ?></div>
	</div>

	<div class="wrap site-footer__bottom">
		<p><?php echo esc_html( get_theme_mod( 'dsk_footer_copyright', '© ' . gmdate( 'Y' ) . ' All rights reserved.' ) ); ?></p>
		<?php
		$credit_text = get_theme_mod( 'dsk_footer_credit_text', '' );
		$credit_url  = get_theme_mod( 'dsk_footer_credit_url', '' );
		if ( $credit_text ) :
			?>
			<p class="site-footer__credit">
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
