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
