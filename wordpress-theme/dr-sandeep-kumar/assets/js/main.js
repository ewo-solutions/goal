(function () {
	'use strict';

	var header = document.getElementById( 'site-header' );
	var navToggle = document.getElementById( 'nav-toggle' );
	var primaryNav = document.getElementById( 'primary-nav' );
	var backToTop = document.getElementById( 'back-to-top' );

	/* --- Sticky header background on scroll --- */
	function onScroll() {
		if ( backToTop ) {
			backToTop.classList.toggle( 'is-visible', window.scrollY > 600 );
		}
	}
	window.addEventListener( 'scroll', onScroll, { passive: true } );
	onScroll();

	/* --- Slide-in nav panel (menu pill) --- */
	var navPanel = document.getElementById( 'nav-panel' );
	var navScrim = document.getElementById( 'nav-scrim' );
	if ( navToggle && navPanel ) {
		var setNav = function ( open ) {
			navPanel.classList.toggle( 'is-open', open );
			navToggle.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
			if ( navScrim ) {
				navScrim.hidden = ! open;
				// let the element paint before transitioning opacity
				window.requestAnimationFrame( function () {
					navScrim.classList.toggle( 'is-open', open );
				} );
			}
		};
		navToggle.addEventListener( 'click', function () {
			setNav( ! navPanel.classList.contains( 'is-open' ) );
		} );
		if ( navScrim ) {
			navScrim.addEventListener( 'click', function () { setNav( false ); } );
		}
		document.addEventListener( 'keydown', function ( e ) {
			if ( e.key === 'Escape' ) { setNav( false ); }
		} );
	}

	/* --- Back to top --- */
	if ( backToTop ) {
		backToTop.addEventListener( 'click', function () {
			window.scrollTo( { top: 0, behavior: 'smooth' } );
		} );
	}


	/* --- Interviews carousel ---
	 * Single-line track; arrows step by one card. Cards visible comes from
	 * the --per custom property so CSS stays the source of truth for the
	 * breakpoints, and the track re-clamps on resize. */
	document.querySelectorAll( '.interviews__row' ).forEach( function ( row ) {
		var track = row.querySelector( '.interviews__track' );
		var prev = row.querySelector( '.interviews__nav--prev' );
		var next = row.querySelector( '.interviews__nav--next' );
		if ( ! track || ! prev || ! next ) { return; }

		var cards = track.children;
		var index = 0;

		function perView() {
			var v = parseInt( getComputedStyle( row ).getPropertyValue( '--per' ), 10 );
			return v > 0 ? v : 1;
		}
		function maxIndex() {
			return Math.max( 0, cards.length - perView() );
		}
		function apply() {
			index = Math.min( index, maxIndex() );
			var step = 0;
			if ( cards.length ) {
				var gap = parseFloat( getComputedStyle( track ).columnGap ) || 0;
				step = cards[ 0 ].getBoundingClientRect().width + gap;
			}
			track.style.transform = 'translateX(' + ( -index * step ) + 'px)';
			prev.disabled = index <= 0;
			next.disabled = index >= maxIndex();
		}

		prev.addEventListener( 'click', function () { index--; apply(); } );
		next.addEventListener( 'click', function () { index++; apply(); } );

		var t;
		window.addEventListener( 'resize', function () {
			clearTimeout( t );
			t = setTimeout( apply, 120 );
		} );
		apply();
	} );

	/* --- Scroll reveal ---
	 * Equivalent of the reference site's WOW.js fadeInUp. Elements opt in
	 * with class="reveal" and stagger via a --reveal-delay custom property.
	 * Without JS the `js` class is never added, so nothing is hidden. */
	var reveals = document.querySelectorAll( '.reveal' );
	if ( reveals.length && 'IntersectionObserver' in window ) {
		var io = new IntersectionObserver(
			function ( entries ) {
				entries.forEach( function ( entry ) {
					if ( entry.isIntersecting ) {
						entry.target.classList.add( 'is-in' );
						io.unobserve( entry.target );
					}
				} );
			},
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
		);
		reveals.forEach( function ( el ) { io.observe( el ); } );
	} else {
		reveals.forEach( function ( el ) { el.classList.add( 'is-in' ); } );
	}
} )();
