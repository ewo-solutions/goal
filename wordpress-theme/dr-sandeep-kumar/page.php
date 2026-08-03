<?php
/**
 * Standard page template. Deliberately just a normal WordPress Loop calling
 * the_content() — this is what lets Elementor (or the block editor) take
 * over a page's content while the coded header/footer stay in place. Build
 * the actual home page layout in the Elementor editor on whichever Page you
 * set as the static front page under Settings → Reading.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>
	<article <?php post_class(); ?>>
		<?php the_content(); ?>
	</article>
<?php endwhile; ?>

<?php
get_footer();
