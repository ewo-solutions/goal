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
		<img class="global__icon" src="<?php echo esc_url( $g['icon'] ); ?>" alt="" />
		<h2 class="h-xl h-xl--light"><?php echo esc_html( $g['title'] ); ?></h2>
		<p class="copy"><?php echo esc_html( $g['body'] ); ?></p>
		<ul class="global__list">
			<?php foreach ( $g['locations'] as $place ) : ?>
				<li><?php echo esc_html( $place ); ?></li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>
