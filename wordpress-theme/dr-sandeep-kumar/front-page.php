<?php
/**
 * Home page. This theme covers the home page only — front-page.php is used
 * for "/" regardless of the Settings → Reading choice, and index.php simply
 * includes this same template so the site never falls back to a blank
 * screen.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>

<?php get_template_part( 'template-parts/home/hero' ); ?>
<?php get_template_part( 'template-parts/home/partners' ); ?>
<?php get_template_part( 'template-parts/home/about' ); ?>
<?php get_template_part( 'template-parts/home/services' ); ?>
<?php get_template_part( 'template-parts/home/cta-banner', null, array(
	'variant'    => 'mastering',
	'photo_mod'  => 'dsk_mastering_photo',
	'heading'    => dsk_mod( 'dsk_mastering_heading' ),
	'text'       => dsk_mod( 'dsk_mastering_text' ),
	'cta_text'   => dsk_mod( 'dsk_mastering_cta_text' ),
	'cta_url'    => dsk_mod( 'dsk_mastering_cta_url' ),
	'image_side' => 'right',
) ); ?>
<?php get_template_part( 'template-parts/home/testimonial' ); ?>
<?php get_template_part( 'template-parts/home/trailblazer' ); ?>
<?php get_template_part( 'template-parts/home/achievements' ); ?>
<?php get_template_part( 'template-parts/home/cta-banner', null, array(
	'variant'    => 'practices',
	'photo_mod'  => 'dsk_practices_photo',
	'heading'    => dsk_mod( 'dsk_practices_heading' ),
	'text'       => dsk_mod( 'dsk_practices_text' ),
	'cta_text'   => __( 'Learn More', 'dsk-home' ),
	'cta_url'    => dsk_mod( 'dsk_practices_cta_url' ),
	'image_side' => 'left',
) ); ?>
<?php get_template_part( 'template-parts/home/global' ); ?>
<?php get_template_part( 'template-parts/home/conversations' ); ?>
<?php get_template_part( 'template-parts/home/cta-banner', null, array(
	'variant'    => 'series',
	'photo_mod'  => '',
	'heading'    => dsk_mod( 'dsk_series_heading' ),
	'text'       => dsk_mod( 'dsk_series_text' ),
	'cta_text'   => dsk_mod( 'dsk_series_cta_text' ),
	'cta_url'    => dsk_mod( 'dsk_series_cta_url' ),
	'image_side' => 'right',
) ); ?>
<?php get_template_part( 'template-parts/home/charity' ); ?>
<?php get_template_part( 'template-parts/home/instagram-banner' ); ?>
<?php get_template_part( 'template-parts/home/enquiry' ); ?>

<?php
get_footer();
