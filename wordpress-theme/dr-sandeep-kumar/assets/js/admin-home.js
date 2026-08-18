/**
 * Home Page Content admin screen.
 *
 * Media Library pickers, repeating rows and image lists. Everything is
 * delegated from the document so rows added after load behave like the ones
 * rendered by PHP.
 */
( function ( $ ) {
	'use strict';

	var strings = window.dskHomeAdmin || {};

	/* --- Media Library picker --- */

	function setImage( $wrap, url ) {
		$wrap.find( '.dsk-img__input' ).val( url );
		var $preview = $wrap.find( '.dsk-img__preview' ).empty();
		if ( url ) {
			$preview.append( $( '<img>' ).attr( 'src', url ).attr( 'alt', '' ) );
		}
	}

	$( document ).on( 'click', '.dsk-img__pick', function ( e ) {
		e.preventDefault();

		var $wrap = $( this ).closest( '.dsk-img' );
		var frame = window.wp.media( {
			title: strings.chooseTitle,
			button: { text: strings.chooseButton },
			library: { type: 'image' },
			multiple: false
		} );

		frame.on( 'select', function () {
			var attachment = frame.state().get( 'selection' ).first().toJSON();
			// Prefer a sensibly sized file where the Library made one.
			var url = attachment.url;
			if ( attachment.sizes && attachment.sizes.large ) {
				url = attachment.sizes.large.url;
			}
			setImage( $wrap, url );
		} );

		frame.open();
	} );

	$( document ).on( 'click', '.dsk-img__clear', function ( e ) {
		e.preventDefault();
		setImage( $( this ).closest( '.dsk-img' ), '' );
	} );

	// Typing or pasting a URL by hand should update the thumbnail too.
	$( document ).on( 'change', '.dsk-img__input', function () {
		var $wrap = $( this ).closest( '.dsk-img' );
		setImage( $wrap, $( this ).val() );
	} );

	/* --- Image lists (badges) --- */

	$( document ).on( 'click', '.dsk-imglist__add', function ( e ) {
		e.preventDefault();

		var $list = $( this ).closest( '.dsk-imglist' );
		var index = parseInt( $list.attr( 'data-next' ), 10 ) || 0;
		$list.attr( 'data-next', index + 1 );

		var name = $list.attr( 'data-name' ) + '[' + index + ']';
		var $row = $(
			'<div class="dsk-img dsk-img--removable">' +
				'<div class="dsk-img__preview"></div>' +
				'<div class="dsk-img__fields">' +
					'<input type="text" class="large-text code dsk-img__input" />' +
					'<p class="dsk-img__actions">' +
						'<button type="button" class="button dsk-img__pick"></button> ' +
						'<button type="button" class="button-link-delete dsk-img__delete"></button>' +
					'</p>' +
				'</div>' +
			'</div>'
		);

		$row.find( '.dsk-img__input' ).attr( 'name', name );
		$row.find( '.dsk-img__pick' ).text( strings.chooseTitle || 'Choose image' );
		$row.find( '.dsk-img__delete' ).text( 'Remove' );

		$list.find( '.dsk-imglist__items' ).append( $row );
		$row.find( '.dsk-img__pick' ).trigger( 'click' );
	} );

	$( document ).on( 'click', '.dsk-img__delete', function ( e ) {
		e.preventDefault();
		$( this ).closest( '.dsk-img' ).remove();
	} );

	/* --- Repeating rows --- */

	$( document ).on( 'click', '.dsk-rep__add', function ( e ) {
		e.preventDefault();

		var $rep = $( this ).closest( '.dsk-rep' );
		var index = parseInt( $rep.attr( 'data-next' ), 10 ) || 0;
		$rep.attr( 'data-next', index + 1 );

		// Only the first template belongs to this repeater — a nested one
		// would live inside .dsk-rep__rows.
		var markup = $rep.children( '.dsk-rep__template' ).html().split( '__i__' ).join( index );
		var $row = $( markup );

		$rep.children( '.dsk-rep__rows' ).append( $row );
		$row[ 0 ].scrollIntoView( { block: 'nearest' } );
		$row.find( 'input[type="text"], textarea' ).first().trigger( 'focus' );
	} );

	$( document ).on( 'click', '.dsk-rep__remove', function ( e ) {
		e.preventDefault();
		if ( window.confirm( strings.confirmRow || 'Remove this item?' ) ) {
			$( this ).closest( '.dsk-rep__row' ).remove();
		}
	} );

	$( document ).on( 'click', '.dsk-rep__up', function ( e ) {
		e.preventDefault();
		var $row = $( this ).closest( '.dsk-rep__row' );
		$row.prev( '.dsk-rep__row' ).before( $row );
	} );

	$( document ).on( 'click', '.dsk-rep__down', function ( e ) {
		e.preventDefault();
		var $row = $( this ).closest( '.dsk-rep__row' );
		$row.next( '.dsk-rep__row' ).after( $row );
	} );
} )( window.jQuery );
