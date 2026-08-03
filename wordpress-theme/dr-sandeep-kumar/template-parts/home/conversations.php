<?php
/**
 * Video interview grid ("In conversation with ..."). Each card opens
 * video_url in a lightbox-free new tab by default; wire up a lightbox
 * script if desired. Edit dsk_get_conversations() in inc/home-content.php.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$conversations = dsk_get_conversations();
if ( ! $conversations ) {
	return;
}
?>
<section class="conversations" data-reveal>
	<div class="wrap">
		<h2 class="section-heading"><?php esc_html_e( 'In Conversation', 'dsk-home' ); ?></h2>
		<div class="conversations__grid">
			<?php foreach ( $conversations as $conversation ) : ?>
				<a class="conversations__card" href="<?php echo esc_url( $conversation['video_url'] ); ?>" target="_blank" rel="noopener noreferrer">
					<span class="conversations__thumb">
						<?php dsk_attachment_image( $conversation['image_id'], $conversation['name'], 'conversations__image', 'medium', $conversation['name'] ); ?>
						<span class="conversations__play" aria-hidden="true">
							<svg width="18" height="20" viewBox="0 0 18 20" fill="currentColor"><path d="M0 0l18 10L0 20V0z" /></svg>
						</span>
					</span>
					<span class="conversations__name"><?php echo esc_html( $conversation['name'] ); ?></span>
					<span class="conversations__role"><?php echo esc_html( $conversation['role'] ); ?></span>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>
