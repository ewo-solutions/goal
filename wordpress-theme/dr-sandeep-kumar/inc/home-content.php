<?php
/**
 * Home page content.
 *
 * All copy, links and images for the home page live here in one place.
 * `dsk_img()` points at the bundled files in assets/images/; swap any value
 * for a Media Library URL (Media → the item → "Copy URL to clipboard") to
 * change an image without touching a template.
 *
 * Contact details, social links and the footer are edited in
 * Appearance → Customize instead (see inc/content-schema.php).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/** URL of a file bundled in assets/images/. */
function dsk_img( $file ) {
	return DSK_THEME_URI . '/assets/images/' . $file;
}

/** Kept for any slot you'd rather leave as a neutral placeholder. */
function dsk_ph( $name ) {
	return DSK_THEME_URI . '/assets/images/placeholder-' . $name . '.svg';
}

function dsk_home() {
	return array(

		// Handwritten signature marks. Light sits on the dark gradient,
		// navy on the off-white bands.
		'signature'       => dsk_img( 'signature-navy.svg' ),
		'signature_light' => dsk_img( 'signature-light.svg' ),
		'signature_alt'   => 'Dr Sandeep Kumar',

		'hero' => array(
			// Vimeo embed on the original. Point this at an MP4 to play it
			// inline; otherwise the still below is used.
			'video'      => '',
			'vimeo_note' => 'https://player.vimeo.com/video/844185510',
			'image'      => dsk_img( 'hero.jpg' ),
		),

		'partners' => array(
			array( 'name' => 'MiSmile Network', 'url' => 'https://mismile.co.uk/', 'image' => dsk_img( 'partner-1.png' ) ),
			array( 'name' => 'Smile Stylist', 'url' => 'https://www.smilestylist.co.uk/', 'image' => dsk_img( 'partner-2.png' ) ),
			array( 'name' => 'Invisalign', 'url' => 'http://invisalign.co.uk/', 'image' => dsk_img( 'partner-3.png' ) ),
			array( 'name' => 'Smmmile', 'url' => 'https://smmmile.store/', 'image' => dsk_img( 'partner-4.png' ) ),
			array( 'name' => 'Mastering your Invisalign Business', 'url' => 'https://masteringinvisalign.co.uk/', 'image' => dsk_img( 'partner-5.png' ) ),
			array( 'name' => 'Dental Industry Awards 2024', 'url' => '#', 'image' => dsk_img( 'partner-6.png' ) ),
			array( 'name' => 'Dental Industry Awards', 'url' => 'https://dentistry.co.uk/awards/dental-industry-awards/', 'image' => dsk_img( 'partner-7.png' ) ),
			array( 'name' => 'MiSmile Birmingham', 'url' => 'https://mismilebirmingham.co.uk/', 'image' => dsk_img( 'partner-8.png' ) ),
			array( 'name' => 'Smil', 'url' => '#', 'image' => dsk_img( 'partner-9.png' ) ),
		),

		'about' => array(
			'image'      => dsk_img( 'portrait.png' ),
			'badges'     => array( dsk_img( 'badge-1.png' ), dsk_img( 'badge-2.png' ), dsk_img( 'badge-3.png' ) ),
			'lead'       => 'Dr Sandeep Kumar, the behind-the-scenes leader of MiSmile, is stepping forward to reveal how you can build your million-pound Invisalign business in this never-been-shared-before, exclusive experience.',
			'body'       => 'Originally from India, Dr Sandeep came to the UK in 1999 and qualified with the GDC in 2000. On the lookout for his next opportunity and recognising the huge business potential Invisalign could bring, he bought his first practice and built it into the UK&rsquo;s first Invisalign-only clinic &ndash; MiSmile Birmingham. Now, MiSmile Birmingham is just one of Sandeep&rsquo;s million-pound practices.',
			'credential' => 'Invisalign Diamond Apex Provider',
			'handle'     => 'drsandeepkumar_',
			'cta'        => array( 'label' => 'Follow', 'url' => 'https://www.instagram.com/drsandeepkumar_' ),
		),

		'services' => array(
			array( 'title' => 'MiSmile Network', 'sub' => '', 'url' => '#', 'image' => dsk_img( 'tile-network.png' ) ),
			array( 'title' => 'The Growth Series', 'sub' => '', 'url' => '#', 'image' => dsk_img( 'tile-series.png' ) ),
			array( 'title' => 'Book', 'sub' => '', 'url' => '#', 'image' => dsk_img( 'tile-book.png' ) ),
			array( 'title' => 'Podcast', 'sub' => 'In conversation with Sandeep Kumar', 'url' => '#', 'image' => dsk_img( 'tile-podcast.png' ) ),
		),

		'mastering' => array(
			'image'    => dsk_img( 'mastering.jpg' ),
			'wordmark' => dsk_img( 'mastering-wordmark.svg' ),
			'title'    => 'Mastering your Invisalign Business',
			'body'     => array(
				'Mastering your Invisalign Business by Dr Sandeep Kumar gives you the opportunity to build your own multi-million pound Invisalign business. A one day, fully immersive education experience that will give you the tools to independent practice growth with the Invisalign system, whatever your goal may be. Whether you&rsquo;re an Invisalign Full or a Go provider, Bronze tier or Diamond, this experience puts the groundwork in place to fast-track your growth.',
				'Dr Sandeep will take you through the four non-negotiable strategic pillars that underpin the MiSmile Network and MiSmile Birmingham, and guide you on how to implement these in your own practice with a step-by-step action plan.',
			),
			'cta'      => array( 'label' => 'Apply Here', 'url' => '#' ),
		),

		'testimonial' => array(
			'mark'  => dsk_img( 'quote-mark.svg' ),
			'quote' => 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him.',
			'name'  => 'Sandeep Kumar',
			'role'  => 'CEO &amp; Founder of The MiSmile Network',
		),

		'story' => array(
			'image'     => dsk_img( 'story.jpg' ),
			'badges'    => array( dsk_img( 'story-badge-1.png' ), dsk_img( 'story-badge-2.png' ) ),
			'strapline' => 'From India to Invisalign',
			'title'     => 'Sandeep can only be described as a trailblazer in the world of Invisalign.',
			'body'      => array(
				'Sandeep can only be described as a trailblazer in the world of Invisalign.',
				'Originally from India, Sandeep came to the UK in 1999. He qualified with the GDC in 2000 and on the lookout for his next opportunity, bought his first practice in 2003.',
				'More than 20 years later and after recognising the huge business potential Invisalign could bring, Sandeep has built his success around the clear aligner brand and has inspired and encouraged those around him to do the same.',
				'Founder of three successful private clinic brands, the MiSmile Network and Mastering your Invisalign Business, Sandeep also shares his thoughts and opinions with the wider industry and can often be found on stage speaking and training others on the opportunities Invisalign can harness.',
			),
			'cta'       => array( 'label' => 'Learn More', 'url' => '#' ),
		),

		'achievements' => array(
			array( 'icon' => dsk_img( 'ach-diamond.png' ), 'text' => 'Sandeep is one of a handful of Invisalign Diamond Apex Providers in Europe' ),
			array( 'icon' => dsk_img( 'ach-speaker.svg' ), 'text' => 'Sandeep is a highly respected speaker for Align Technology' ),
			array( 'icon' => dsk_img( 'ach-award.svg' ), 'text' => 'Sandeep has been Highly Commended as Business Leader of the Year' ),
		),

		'network' => array(
			'image' => dsk_img( 'network.jpg' ),
			'title' => 'Comprising of more than 100 independent dental practices',
			'body'  => array(
				'The only GDP network endorsed by Align Technology, the MiSmile Network has successfully treated more than 30,000 patients with Invisalign.',
				'The network programme is an affordable, 360 degree solution providing everything you need for scalable, long term growth.',
			),
			'cta'   => array( 'label' => 'Learn More', 'url' => 'https://join.mismile.co.uk/' ),
		),

		'global' => array(
			'background' => dsk_img( 'bg-global.jpg' ),
			'icon'       => dsk_img( 'globe.svg' ),
			'title'      => 'Global Invisalign speaker',
			'body'       => 'Sandeep has spoken and lectured globally',
			'locations'  => array( 'London', 'Brazil', 'Mexico', 'India', 'Macau', 'Barcelona' ),
		),

		'interviews' => array(
			'title' => 'In conversation with Sandeep Kumar',
			'items' => array(
				array(
					'name'  => 'Shaz Memon',
					'role'  => 'Founder of Digimax Dental &amp; Author of Instagram for Dentists',
					'url'   => 'https://player.vimeo.com/video/652906620',
					'image' => dsk_img( 'interview-1.png' ),
				),
				array(
					'name'  => 'Raj Pudipeddi',
					'role'  => 'Chief Product and Marketing Officer, SVP MD Asia Pacific',
					'url'   => 'https://player.vimeo.com/video/711322398',
					'image' => dsk_img( 'interview-2.png' ),
				),
				array(
					'name'  => 'Markus Sebastian',
					'role'  => 'Senior Vice President &amp; MD, EMEA, Align Tech',
					'url'   => 'https://player.vimeo.com/video/711322885',
					'image' => dsk_img( 'interview-3.png' ),
				),
				array(
					'name'  => 'Lee Taylor',
					'role'  => 'Vice President for Marketing, EMEA, Align Tech',
					'url'   => 'https://player.vimeo.com/video/711411806',
					'image' => dsk_img( 'interview-4.png' ),
				),
			),
		),

		'series' => array(
			'title' => 'The Growth Series',
			'body'  => 'In his Invisalign Growth Series, Sandeep shares his journey, his successes, his failures and most importantly the learnings that have helped him achieve a consistent Invisalign Diamond Provider status.',
			'cta'   => array( 'label' => 'Watch the Series', 'url' => '#' ),
		),

		'charity' => array(
			'logo'   => dsk_img( 'charity-logo.png' ),
			'image'  => dsk_img( 'charity.png' ),
			'url'    => 'https://operationsmile.uk/',
			'title'  => 'Operation Smile helps change the smiles and lives of children around the world.',
			'raised' => array( 'label' => 'We have raised', 'amount' => '&pound;132,657' ),
		),

		'enquiry' => array(
			'title' => 'Contact Sandeep',
			'intro' => 'For all enquires, please feel free to contact Sandeep using the form below.',
		),

		'instagram' => array(
			'url' => 'https://www.instagram.com/drsandeepkumar_',
		),

		// Soft misty backdrop behind the video-series + charity pair.
		'mist_background' => dsk_img( 'bg-mist.png' ),
		// Diagonal texture down the left edge of the dark gradient group.
		'texture'         => dsk_img( 'bg-texture.png' ),
	);
}

/** Footer quick-links (used by the home page's link row). */
function dsk_get_footer_links() {
	return array(
		array( 'label' => __( 'About Dr Sandeep', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'Mastering Invisalign', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'MiSmile Network', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'The Growth Series', 'dsk-home' ), 'url' => '#' ),
		array( 'label' => __( 'Contact Me', 'dsk-home' ), 'url' => '#enquiry' ),
	);
}
