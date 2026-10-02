<?php
/**
 * Home page — hand-coded to mirror the reference design.
 *
 * Sections are grouped the way the reference groups them: the partner
 * strip / about / services share one dark gradient, and the quote / story /
 * achievements / network share one off-white field, rather than each
 * carrying its own background.
 *
 * Content is edited under the "Home Page" admin screen (see
 * inc/home-fields.php); styling in assets/css/home.css. This page
 * deliberately does NOT use the_content(), so Elementor does not take it
 * over — that's what allows the exact match. Every other page still runs
 * through page.php and stays Elementor-editable.
 *
 * The hero panel is optional: when it is switched off the page opens on the
 * introduction, and .home-page--no-hero adds the clearance the fixed header
 * would otherwise sit on top of.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<div class="home-page<?php echo empty( dsk_home()['hero']['show'] ) ? ' home-page--no-hero' : ''; ?>">
	<?php
	if ( ! empty( dsk_home()['hero']['show'] ) ) {
		get_template_part( 'template-parts/home/hero' );
	}
	get_template_part( 'template-parts/home/dark-group' );
	get_template_part( 'template-parts/home/mastering' );
	get_template_part( 'template-parts/home/light-band' );
	get_template_part( 'template-parts/home/global' );
	get_template_part( 'template-parts/home/interviews' );
	get_template_part( 'template-parts/home/series-charity' );
	get_template_part( 'template-parts/home/enquiry' );
	?>
</div>

<?php
get_footer();
