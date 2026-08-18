<?php
/**
 * Home page field schema.
 *
 * Describes every editable slot on the home page: which section it belongs
 * to, what to call it, and what kind of value it holds. One schema drives
 * three things — the admin screen in inc/admin-home.php, the sanitising on
 * save, and the merge over the defaults in inc/home-content.php — so a new
 * field only ever has to be described once.
 *
 * Keys are dot paths into the dsk_home_defaults() array, e.g. `about.cta.url`.
 *
 * Types:
 *   text        single line
 *   textarea    paragraph, limited HTML allowed (wp_kses_post)
 *   url         link or file URL
 *   image       Media Library picker, stores the URL
 *   list_text   one paragraph/item per line
 *   list_image  ordered set of images (badges, logos)
 *   repeater    ordered set of rows, each with its own `fields`
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The editable schema, grouped into the sections a client sees on the page.
 *
 * @return array
 */
function dsk_home_fields() {
	return array(

		'brand' => array(
			'label'  => __( 'Signature & backgrounds', 'dsk-home' ),
			'desc'   => __( 'The handwritten signature marks and the two background textures used across the page.', 'dsk-home' ),
			'fields' => array(
				'signature'       => array( 'label' => __( 'Signature — navy (light backgrounds)', 'dsk-home' ), 'type' => 'image' ),
				'signature_light' => array( 'label' => __( 'Signature — white (dark backgrounds)', 'dsk-home' ), 'type' => 'image' ),
				'signature_alt'   => array( 'label' => __( 'Signature alt text', 'dsk-home' ), 'type' => 'text' ),
				'mist_background' => array( 'label' => __( 'Mist background', 'dsk-home' ), 'type' => 'image' ),
				'texture'         => array( 'label' => __( 'Diagonal texture', 'dsk-home' ), 'type' => 'image' ),
			),
		),

		'hero' => array(
			'label'  => __( 'Hero', 'dsk-home' ),
			'desc'   => __( 'The full-screen opening panel. Leave the video empty to show the still image.', 'dsk-home' ),
			'fields' => array(
				'hero.image' => array( 'label' => __( 'Background image', 'dsk-home' ), 'type' => 'image' ),
				'hero.video' => array( 'label' => __( 'Background video (MP4 URL)', 'dsk-home' ), 'type' => 'url' ),
			),
		),

		'partners' => array(
			'label'  => __( 'Partner logos', 'dsk-home' ),
			'desc'   => __( 'The logo strip below the hero.', 'dsk-home' ),
			'fields' => array(
				'partners' => array(
					'label'      => __( 'Logos', 'dsk-home' ),
					'type'       => 'repeater',
					'item_label' => __( 'Logo', 'dsk-home' ),
					'fields'     => array(
						'name'  => array( 'label' => __( 'Name', 'dsk-home' ), 'type' => 'text' ),
						'url'   => array( 'label' => __( 'Links to', 'dsk-home' ), 'type' => 'url' ),
						'image' => array( 'label' => __( 'Logo', 'dsk-home' ), 'type' => 'image' ),
					),
				),
			),
		),

		'about' => array(
			'label'  => __( 'About Sandeep', 'dsk-home' ),
			'desc'   => __( 'Portrait, introduction and the Instagram follow button.', 'dsk-home' ),
			'fields' => array(
				'about.image'      => array( 'label' => __( 'Portrait', 'dsk-home' ), 'type' => 'image' ),
				'about.lead'       => array( 'label' => __( 'Opening paragraph', 'dsk-home' ), 'type' => 'textarea' ),
				'about.body'       => array( 'label' => __( 'Second paragraph', 'dsk-home' ), 'type' => 'textarea' ),
				'about.badges'     => array( 'label' => __( 'Credential badges', 'dsk-home' ), 'type' => 'list_image' ),
				'about.credential' => array( 'label' => __( 'Credential caption', 'dsk-home' ), 'type' => 'text' ),
				'about.handle'     => array( 'label' => __( 'Instagram handle', 'dsk-home' ), 'type' => 'text' ),
				'about.cta.label'  => array( 'label' => __( 'Button label', 'dsk-home' ), 'type' => 'text' ),
				'about.cta.url'    => array( 'label' => __( 'Button links to', 'dsk-home' ), 'type' => 'url' ),
			),
		),

		'services' => array(
			'label'  => __( 'Service tiles', 'dsk-home' ),
			'desc'   => __( 'The four full-bleed image tiles.', 'dsk-home' ),
			'fields' => array(
				'services' => array(
					'label'      => __( 'Tiles', 'dsk-home' ),
					'type'       => 'repeater',
					'item_label' => __( 'Tile', 'dsk-home' ),
					'fields'     => array(
						'title' => array( 'label' => __( 'Title', 'dsk-home' ), 'type' => 'text' ),
						'sub'   => array( 'label' => __( 'Small line above the title', 'dsk-home' ), 'type' => 'text' ),
						'url'   => array( 'label' => __( 'Links to', 'dsk-home' ), 'type' => 'url' ),
						'image' => array( 'label' => __( 'Image', 'dsk-home' ), 'type' => 'image' ),
					),
				),
			),
		),

		'mastering' => array(
			'label'  => __( 'Mastering your Invisalign Business', 'dsk-home' ),
			'fields' => array(
				'mastering.image'     => array( 'label' => __( 'Image', 'dsk-home' ), 'type' => 'image' ),
				'mastering.wordmark'  => array( 'label' => __( 'Wordmark', 'dsk-home' ), 'type' => 'image' ),
				'mastering.title'     => array( 'label' => __( 'Title', 'dsk-home' ), 'type' => 'text' ),
				'mastering.body'      => array( 'label' => __( 'Paragraphs', 'dsk-home' ), 'type' => 'list_text' ),
				'mastering.cta.label' => array( 'label' => __( 'Button label', 'dsk-home' ), 'type' => 'text' ),
				'mastering.cta.url'   => array( 'label' => __( 'Button links to', 'dsk-home' ), 'type' => 'url' ),
			),
		),

		'testimonial' => array(
			'label'  => __( 'Pull quote', 'dsk-home' ),
			'fields' => array(
				'testimonial.mark'  => array( 'label' => __( 'Quote mark graphic', 'dsk-home' ), 'type' => 'image' ),
				'testimonial.quote' => array( 'label' => __( 'Quote', 'dsk-home' ), 'type' => 'textarea' ),
				'testimonial.name'  => array( 'label' => __( 'Attributed to', 'dsk-home' ), 'type' => 'text' ),
				'testimonial.role'  => array( 'label' => __( 'Role', 'dsk-home' ), 'type' => 'text' ),
			),
		),

		'story' => array(
			'label'  => __( 'From India to Invisalign', 'dsk-home' ),
			'fields' => array(
				'story.image'     => array( 'label' => __( 'Image', 'dsk-home' ), 'type' => 'image' ),
				'story.badges'    => array( 'label' => __( 'Badges', 'dsk-home' ), 'type' => 'list_image' ),
				'story.strapline' => array( 'label' => __( 'Strapline', 'dsk-home' ), 'type' => 'text' ),
				'story.title'     => array( 'label' => __( 'Heading', 'dsk-home' ), 'type' => 'textarea' ),
				'story.body'      => array( 'label' => __( 'Paragraphs', 'dsk-home' ), 'type' => 'list_text' ),
				'story.cta.label' => array( 'label' => __( 'Button label', 'dsk-home' ), 'type' => 'text' ),
				'story.cta.url'   => array( 'label' => __( 'Button links to', 'dsk-home' ), 'type' => 'url' ),
			),
		),

		'achievements' => array(
			'label'  => __( 'Achievements', 'dsk-home' ),
			'fields' => array(
				'achievements' => array(
					'label'      => __( 'Achievements', 'dsk-home' ),
					'type'       => 'repeater',
					'item_label' => __( 'Achievement', 'dsk-home' ),
					'fields'     => array(
						'icon' => array( 'label' => __( 'Icon', 'dsk-home' ), 'type' => 'image' ),
						'text' => array( 'label' => __( 'Text', 'dsk-home' ), 'type' => 'textarea' ),
					),
				),
			),
		),

		'network' => array(
			'label'  => __( 'MiSmile Network', 'dsk-home' ),
			'fields' => array(
				'network.image'     => array( 'label' => __( 'Image', 'dsk-home' ), 'type' => 'image' ),
				'network.title'     => array( 'label' => __( 'Heading', 'dsk-home' ), 'type' => 'textarea' ),
				'network.body'      => array( 'label' => __( 'Paragraphs', 'dsk-home' ), 'type' => 'list_text' ),
				'network.cta.label' => array( 'label' => __( 'Button label', 'dsk-home' ), 'type' => 'text' ),
				'network.cta.url'   => array( 'label' => __( 'Button links to', 'dsk-home' ), 'type' => 'url' ),
			),
		),

		'global' => array(
			'label'  => __( 'Global speaker', 'dsk-home' ),
			'fields' => array(
				'global.background' => array( 'label' => __( 'Background image', 'dsk-home' ), 'type' => 'image' ),
				'global.icon'       => array( 'label' => __( 'Globe icon', 'dsk-home' ), 'type' => 'image' ),
				'global.title'      => array( 'label' => __( 'Heading', 'dsk-home' ), 'type' => 'text' ),
				'global.body'       => array( 'label' => __( 'Sub-heading', 'dsk-home' ), 'type' => 'text' ),
				'global.locations'  => array( 'label' => __( 'Locations', 'dsk-home' ), 'type' => 'list_text' ),
			),
		),

		'interviews' => array(
			'label'  => __( 'Video interviews', 'dsk-home' ),
			'desc'   => __( 'Shown as a carousel — three at a time on desktop, and the arrows appear as soon as there are more.', 'dsk-home' ),
			'fields' => array(
				'interviews.title' => array( 'label' => __( 'Heading', 'dsk-home' ), 'type' => 'text' ),
				'interviews.items' => array(
					'label'      => __( 'Interviews', 'dsk-home' ),
					'type'       => 'repeater',
					'item_label' => __( 'Interview', 'dsk-home' ),
					'fields'     => array(
						'name'  => array( 'label' => __( 'Guest name', 'dsk-home' ), 'type' => 'text' ),
						'role'  => array( 'label' => __( 'Role', 'dsk-home' ), 'type' => 'text' ),
						'url'   => array( 'label' => __( 'Video URL', 'dsk-home' ), 'type' => 'url' ),
						'image' => array( 'label' => __( 'Thumbnail', 'dsk-home' ), 'type' => 'image' ),
					),
				),
			),
		),

		'series' => array(
			'label'  => __( 'The Growth Series', 'dsk-home' ),
			'fields' => array(
				'series.title'     => array( 'label' => __( 'Heading', 'dsk-home' ), 'type' => 'text' ),
				'series.body'      => array( 'label' => __( 'Paragraph', 'dsk-home' ), 'type' => 'textarea' ),
				'series.cta.label' => array( 'label' => __( 'Button label', 'dsk-home' ), 'type' => 'text' ),
				'series.cta.url'   => array( 'label' => __( 'Button links to', 'dsk-home' ), 'type' => 'url' ),
			),
		),

		'charity' => array(
			'label'  => __( 'Charity', 'dsk-home' ),
			'fields' => array(
				'charity.logo'          => array( 'label' => __( 'Charity logo', 'dsk-home' ), 'type' => 'image' ),
				'charity.image'         => array( 'label' => __( 'Image', 'dsk-home' ), 'type' => 'image' ),
				'charity.url'           => array( 'label' => __( 'Links to', 'dsk-home' ), 'type' => 'url' ),
				'charity.title'         => array( 'label' => __( 'Heading', 'dsk-home' ), 'type' => 'textarea' ),
				'charity.raised.label'  => array( 'label' => __( 'Amount caption', 'dsk-home' ), 'type' => 'text' ),
				'charity.raised.amount' => array( 'label' => __( 'Amount raised', 'dsk-home' ), 'type' => 'text' ),
			),
		),

		'enquiry' => array(
			'label'  => __( 'Contact section', 'dsk-home' ),
			'desc'   => __( 'The email address the form sends to lives in Appearance → Customize → Contact details.', 'dsk-home' ),
			'fields' => array(
				'enquiry.title' => array( 'label' => __( 'Heading', 'dsk-home' ), 'type' => 'text' ),
				'enquiry.intro' => array( 'label' => __( 'Intro text', 'dsk-home' ), 'type' => 'textarea' ),
				'instagram.url' => array( 'label' => __( 'Instagram link', 'dsk-home' ), 'type' => 'url' ),
			),
		),

		'footer_links' => array(
			'label'  => __( 'Footer links', 'dsk-home' ),
			'fields' => array(
				'footer_links' => array(
					'label'      => __( 'Links', 'dsk-home' ),
					'type'       => 'repeater',
					'item_label' => __( 'Link', 'dsk-home' ),
					'fields'     => array(
						'label' => array( 'label' => __( 'Label', 'dsk-home' ), 'type' => 'text' ),
						'url'   => array( 'label' => __( 'Links to', 'dsk-home' ), 'type' => 'url' ),
					),
				),
			),
		),
	);
}

/**
 * Flattens the schema to `path => definition`, dropping the section grouping.
 *
 * @return array
 */
function dsk_home_field_index() {
	static $index = null;

	if ( null === $index ) {
		$index = array();
		foreach ( dsk_home_fields() as $section ) {
			foreach ( $section['fields'] as $path => $def ) {
				$index[ $path ] = $def;
			}
		}
	}

	return $index;
}

/**
 * Reads a dot path out of a nested array.
 *
 * @param array  $data    Source array.
 * @param string $path    Dot path, e.g. `about.cta.url`.
 * @param mixed  $default Returned when the path is missing.
 * @return mixed
 */
function dsk_path_get( $data, $path, $default = null ) {
	foreach ( explode( '.', $path ) as $key ) {
		if ( ! is_array( $data ) || ! array_key_exists( $key, $data ) ) {
			return $default;
		}
		$data = $data[ $key ];
	}

	return $data;
}

/**
 * Writes a dot path into a nested array, creating levels as needed.
 *
 * @param array  $data  Array to modify, by reference.
 * @param string $path  Dot path.
 * @param mixed  $value Value to set.
 */
function dsk_path_set( &$data, $path, $value ) {
	$keys = explode( '.', $path );
	$last = array_pop( $keys );
	$node = &$data;

	foreach ( $keys as $key ) {
		if ( ! isset( $node[ $key ] ) || ! is_array( $node[ $key ] ) ) {
			$node[ $key ] = array();
		}
		$node = &$node[ $key ];
	}

	$node[ $last ] = $value;
}
