<?php
/**
 * Global speaker band — photographic backdrop, globe mark, 60px heading and
 * a row of large bold city names.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$g = dsk_home()['global'];
?>
<section class="global" style="background-image:url(<?php echo esc_url( $g['background'] ); ?>)">
	<div class="shell reveal">
		<div class="global__icon" aria-hidden="true">
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="12" r="10.2" />
				<path d="M2 12h20M12 1.8c2.7 2.8 4.2 6.4 4.2 10.2S14.7 19.4 12 22.2C9.3 19.4 7.8 15.8 7.8 12S9.3 4.6 12 1.8Z" />
			</svg>
		</div>
		<h2 class="h-xl h-xl--light"><?php echo esc_html( $g['title'] ); ?></h2>
		<p class="copy"><?php echo esc_html( $g['body'] ); ?></p>
		<ul class="global__list">
			<?php foreach ( $g['locations'] as $place ) : ?>
				<li><?php echo esc_html( $place ); ?></li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
