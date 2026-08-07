<?php
/**
 * Home page content.
 *
 * All copy, links and images for the hand-coded home page live here in one
 * place. Edit the arrays below — every `image` value is a URL, so you can
 * point it at anything in your Media Library (copy the file URL from
 * Media → the item → "Copy URL to clipboard"). Leave a value as the
 * bundled `placeholder-*.svg` and that slot keeps its placeholder.
 *
 * Contact details, social links and the footer are edited in
 * Appearance → Customize instead (see inc/content-schema.php).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** URL of a bundled placeholder graphic. */
function dsk_ph( $name ) {
	return DSK_THEME_URI . '/assets/images/placeholder-' . $name . '.svg';
}

function dsk_home() {
	return array(

		'hero' => array(
			// Leave 'video' empty to show the still image instead.
			'video' => '',
			'image' => dsk_ph( 'hero' ),
		),

		'partners' => array(
			array( 'name' => 'MiSmile Network', 'url' => '#', 'image' => dsk_ph( 'partner-logo' ) ),
			array( 'name' => 'Smile Stylist', 'url' => '#', 'image' => dsk_ph( 'partner-logo' ) ),
			array( 'name' => 'Invisalign', 'url' => '#', 'image' => dsk_ph( 'partner-logo' ) ),
			array( 'name' => 'Smmmile', 'url' => '#', 'image' => dsk_ph( 'partner-logo' ) ),
			array( 'name' => 'Mastering Invisalign', 'url' => '#', 'image' => dsk_ph( 'partner-logo' ) ),
			array( 'name' => 'Dental Industry Awards', 'url' => '#', 'image' => dsk_ph( 'partner-logo' ) ),
		),

		'about' => array(
			'image'   => dsk_ph( 'portrait' ),
			'badges'  => array( dsk_ph( 'badge-dark' ), dsk_ph( 'badge-dark' ), dsk_ph( 'badge-dark' ) ),
			'lead'    => 'Dr Sandeep Kumar, the behind-the-scenes leader of MiSmile, is stepping forward to reveal how you can build your million-pound Invisalign business in this never-been-shared-before, exclusive experience.',
			'body'    => 'Originally from India, Dr Sandeep came to the UK in 1999 and qualified with the GDC in 2000. On the lookout for his next opportunity and recognising the huge business potential Invisalign could bring, he bought his first practice and built it into the UK&rsquo;s first Invisalign-only clinic &ndash; MiSmile Birmingham. Now, MiSmile Birmingham is just one of Sandeep&rsquo;s million-pound practices.',
			'credential' => 'Invisalign Diamond Apex Provider',
			'handle'  => 'drsandeepkumar_',
			'cta'     => array( 'label' => 'Follow', 'url' => 'https://www.instagram.com/' ),
		),

		'services' => array(
			array( 'title' => 'MiSmile Network', 'sub' => '', 'url' => '#', 'image' => dsk_ph( 'service-tile' ) ),
			array( 'title' => 'The Growth Series', 'sub' => '', 'url' => '#', 'image' => dsk_ph( 'service-tile' ) ),
			array( 'title' => 'Book', 'sub' => '', 'url' => '#', 'image' => dsk_ph( 'service-tile' ) ),
			array( 'title' => 'Podcast', 'sub' => 'In conversation with Sandeep Kumar', 'url' => '#', 'image' => dsk_ph( 'service-tile' ) ),
		),

		'mastering' => array(
			'image' => dsk_ph( 'mastering' ),
			'title'  => 'Mastering your Invisalign Business',
			'byline' => 'by Dr Sandeep Kumar',
			'body'  => array(
				'Mastering your Invisalign Business gives you the opportunity to build your own multi-million pound Invisalign business. A one day, fully immersive education experience that will give you the tools to independent practice growth with the Invisalign system, whatever your goal may be.',
				'Dr Sandeep will take you through the four non-negotiable strategic pillars that underpin the MiSmile Network and MiSmile Birmingham, and guide you on how to implement these in your own practice with a step-by-step action plan.',
			),
			'cta'   => array( 'label' => 'Apply Here', 'url' => '#' ),
		),

		'testimonial' => array(
			'quote' => 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.',
			'name'  => 'Sandeep Kumar',
			'role'  => 'CEO &amp; Founder of The MiSmile Network',
		),

		'story' => array(
			'image'   => dsk_ph( 'story' ),
			'badges'  => array( dsk_ph( 'badge' ) ),
			'strapline' => 'From India to Invisalign',
			'title'   => 'Sandeep can only be described as a trailblazer in the world of Invisalign.',
			'body'    => array(
				'Originally from India, Sandeep came to the UK in 1999. He qualified with the GDC in 2000 and on the lookout for his next opportunity, bought his first practice in 2003.',
				'More than 20 years later and after recognising the huge business potential Invisalign could bring, Sandeep has built his success around the clear aligner brand and has inspired and encouraged those around him to do the same.',
				'Founder of three successful private clinic brands, the MiSmile Network and Mastering your Invisalign Business, Sandeep also shares his thoughts and opinions with the wider industry and can often be found on stage speaking and training others on the opportunities Invisalign can harness.',
			),
			'cta'     => array( 'label' => 'Learn More', 'url' => '#' ),
		),

		'achievements' => array(
			array( 'icon' => 'diamond', 'text' => 'Sandeep is one of a handful of Invisalign Diamond Apex Providers in Europe' ),
			array( 'icon' => 'megaphone', 'text' => 'Sandeep is a highly respected speaker for Align Technology' ),
			array( 'icon' => 'rosette', 'text' => 'Sandeep has been Highly Commended as Business Leader of the Year' ),
		),

		'network' => array(
			'image' => dsk_ph( 'network' ),
			'title' => 'Comprising of more than 100 independent dental practices',
			'body'  => array(
				'The only GDP network endorsed by Align Technology, the MiSmile Network has successfully treated more than 30,000 patients with Invisalign.',
				'The network programme is an affordable, 360 degree solution providing everything you need for scalable, long term growth.',
			),
			'cta'   => array( 'label' => 'Learn More', 'url' => '#' ),
		),

		'global' => array(
			// Add your own photographic backdrop here (a URL) to match the
			// reference exactly; otherwise the CSS gradient is used.
			'background' => dsk_ph( 'global-bg' ),
			'title'      => 'Global Invisalign speaker',
			'body'       => 'Sandeep has spoken and lectured globally',
			'locations'  => array( 'London', 'Brazil', 'Mexico', 'India', 'Macau', 'Barcelona' ),
		),

		'interviews' => array(
			'title' => 'In conversation with Sandeep Kumar',
			'items' => array(
				array( 'name' => 'Guest Name', 'role' => 'Their role and company', 'url' => '#', 'image' => dsk_ph( 'interview' ) ),
				array( 'name' => 'Guest Name', 'role' => 'Their role and company', 'url' => '#', 'image' => dsk_ph( 'interview' ) ),
				array( 'name' => 'Guest Name', 'role' => 'Their role and company', 'url' => '#', 'image' => dsk_ph( 'interview' ) ),
				array( 'name' => 'Guest Name', 'role' => 'Their role and company', 'url' => '#', 'image' => dsk_ph( 'interview' ) ),
			),
		),

		'series' => array(
			'title' => 'The Growth Series',
			'body'  => 'In his Invisalign Growth Series, Sandeep shares his journey, his successes, his failures and most importantly the learnings that have helped him achieve a consistent Invisalign Diamond Provider status.',
			'cta'   => array( 'label' => 'Watch the Series', 'url' => '#' ),
		),

		'charity' => array(
			'logo'   => dsk_ph( 'charity-logo' ),
			'image'  => dsk_ph( 'charity' ),
			'url'    => '#',
			'title'  => 'Operation Smile helps change the smiles and lives of children around the world.',
			'raised' => array( 'label' => 'We have raised', 'amount' => '&pound;132,657' ),
		),

		'enquiry' => array(
			'title' => 'Contact Sandeep',
			'intro' => 'For all enquires, please feel free to contact Sandeep using the form below.',
		),

		'instagram' => array(
			'url' => 'https://www.instagram.com/',
		),

		// Soft misty backdrop behind the video-series + charity pair.
		'mist_background' => dsk_ph( 'mist-bg' ),
	);
}

/** Footer quick-links (used by footer.php). */
function dsk_get_footer_links() {
	return array(
		array( 'label' => __( 'About', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'Mastering Invisalign', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'MiSmile Network', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'The Growth Series', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'Contact', 'dsk-home' ), 'url' => '#' ),
	);
}
