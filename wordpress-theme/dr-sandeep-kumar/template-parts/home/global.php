<?php
/**
 * Global speaker band — reference `.global-wrapp`: full-bleed photographic
 * background, centred 60px heading, city list. Falls back to the CSS
 * gradient when no background image is set in inc/home-content.php.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$g     = dsk_home()['global'];
$style = $g['background'] ? ' style="background-image:url(' . esc_url( $g['background'] ) . ')"' : '';
?>
<section class="global"<?php echo $style; // phpcs:ignore ?>>
	<div class="shell reveal">
		<div class="global__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.51 10.51 0 0 0 12 1.5Zm7.9 9.6h-3.6a17.4 17.4 0 0 0-1.9-7.2 9.03 9.03 0 0 1 5.5 7.2Zm-7.9-7.4c1 1.4 2.1 3.9 2.3 7.4H9.7c.2-3.5 1.3-6 2.3-7.4ZM4.1 12.9h3.6a17.4 17.4 0 0 0 1.9 7.2 9.03 9.03 0 0 1-5.5-7.2Zm3.6-1.8H4.1a9.03 9.03 0 0 1 5.5-7.2 17.4 17.4 0 0 0-1.9 7.2Zm4.3 9.2c-1-1.4-2.1-3.9-2.3-7.4h4.6c-.2 3.5-1.3 6-2.3 7.4Zm2.4-.2a17.4 17.4 0 0 0 1.9-7.2h3.6a9.03 9.03 0 0 1-5.5 7.2Z" />
			</svg>
		</div>
		<h2 class="h-xl"><?php echo esc_html( $g['title'] ); ?></h2>
		<p class="copy"><?php echo esc_html( $g['body'] ); ?></p>

		<?php if ( ! empty( $g['locations'] ) ) : ?>
			<ul class="global__list">
				<?php foreach ( $g['locations'] as $place ) : ?>
					<li><?php echo esc_html( $place ); ?></li>
				<?php endforeach; ?>
			</ul>
		<?php endif; ?>
	</div>
</section>
