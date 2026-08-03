<?php
/**
 * "Speaks globally" strip — a heading plus a simple list of cities. Edit
 * dsk_get_global_locations() in inc/home-content.php to change the list.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$locations = dsk_get_global_locations();
?>
<section class="global-speaker" data-reveal>
	<div class="wrap global-speaker__grid">
		<div class="global-speaker__icon" aria-hidden="true">
			<svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" /><path d="M2 12h20M12 2c2.6 2.7 4 6.2 4 10s-1.4 7.3-4 10c-2.6-2.7-4-6.2-4-10s1.4-7.3 4-10Z" stroke="currentColor" stroke-width="1.5" /></svg>
		</div>
		<div>
			<h2 class="global-speaker__heading"><?php echo esc_html( dsk_mod( 'dsk_global_heading' ) ); ?></h2>
			<p class="global-speaker__text"><?php echo esc_html( dsk_mod( 'dsk_global_text' ) ); ?></p>
		</div>
		<?php if ( $locations ) : ?>
			<ul class="global-speaker__list">
				<?php foreach ( $locations as $location ) : ?>
					<li><?php echo esc_html( $location ); ?></li>
				<?php endforeach; ?>
			</ul>
		<?php endif; ?>
	</div>
</section>
