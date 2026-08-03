<?php
/**
 * Achievements strip: four stat/highlight cards on a light background,
 * scrolling horizontally on small screens (see .achievements__grid in
 * main.css). Edit dsk_get_achievements() in inc/home-content.php.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$achievements = dsk_get_achievements();
if ( ! $achievements ) {
	return;
}
?>
<section class="achievements" data-reveal>
	<div class="wrap">
		<div class="achievements__grid">
			<?php foreach ( $achievements as $achievement ) : ?>
				<div class="achievements__card">
					<?php dsk_attachment_image( $achievement['image_id'], '', 'achievements__icon', 'thumbnail', __( 'Icon', 'dsk-home' ) ); ?>
					<p><?php echo esc_html( $achievement['text'] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
