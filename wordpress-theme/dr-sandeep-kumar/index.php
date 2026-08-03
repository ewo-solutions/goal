<?php
/**
 * Generic fallback template (used when no more specific template matches,
 * e.g. archives or search results). page.php handles Pages, including
 * whichever Page is set as the static front page in Settings → Reading.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : the_post(); ?>
		<article <?php post_class(); ?>>
			<h1><?php the_title(); ?></h1>
			<?php the_content(); ?>
		</article>
	<?php endwhile; ?>
<?php else : ?>
	<p class="wrap"><?php esc_html_e( 'Nothing found.', 'dsk-home' ); ?></p>
<?php endif; ?>

<?php
get_footer();
