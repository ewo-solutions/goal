(function () {
	'use strict';

	var header = document.getElementById( 'site-header' );
	var navToggle = document.getElementById( 'nav-toggle' );
	var primaryNav = document.getElementById( 'primary-nav' );
	var backToTop = document.getElementById( 'back-to-top' );

	/* --- Sticky header background on scroll --- */
	function onScroll() {
		if ( header ) {
			header.classList.toggle( 'is-scrolled', window.scrollY > 40 );
		}
		if ( backToTop ) {
			backToTop.classList.toggle( 'is-visible', window.scrollY > 600 );
		}
	}
	window.addEventListener( 'scroll', onScroll, { passive: true } );
	onScroll();

	/* --- Mobile menu toggle --- */
	if ( navToggle && primaryNav ) {
		navToggle.addEventListener( 'click', function () {
			var isOpen = primaryNav.classList.toggle( 'is-open' );
			navToggle.setAttribute( 'aria-expanded', isOpen ? 'true' : 'false' );
		} );

		// Submenus: tap the parent link to expand instead of navigating,
		// mirroring the reference site's mobile nav behaviour.
		primaryNav.querySelectorAll( 'li' ).forEach( function ( item ) {
			if ( item.querySelector( 'ul' ) ) {
				var link = item.querySelector( 'a' );
				link.addEventListener( 'click', function ( e ) {
					if ( window.innerWidth > 782 ) {
						return;
					}
					e.preventDefault();
					item.classList.toggle( 'is-open' );
				} );
			}
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
