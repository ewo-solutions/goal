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

	/* --- Scroll reveal --- */
	var revealEls = document.querySelectorAll( '[data-reveal]' );
	if ( revealEls.length && 'IntersectionObserver' in window ) {
		var io = new IntersectionObserver(
			function ( entries ) {
				entries.forEach( function ( entry ) {
					if ( entry.isIntersecting ) {
						entry.target.classList.add( 'is-visible' );
						io.unobserve( entry.target );
					}
				} );
			},
			{ rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
		);
		revealEls.forEach( function ( el ) {
			io.observe( el );
		} );
	} else {
		revealEls.forEach( function ( el ) {
			el.classList.add( 'is-visible' );
		} );
	}

	/* --- Hero typewriter --- */
	var typewriterEl = document.getElementById( 'hero-typewriter' );
	var strings = ( window.dskHome && window.dskHome.typewriterStrings ) || [];
	if ( typewriterEl && strings.length && ! window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
		var stringIndex = 0;
		var charIndex = 0;
		var deleting = false;

		function tick() {
			var current = strings[ stringIndex ];

			if ( ! deleting ) {
				charIndex++;
				typewriterEl.textContent = current.slice( 0, charIndex );
				if ( charIndex === current.length ) {
					deleting = true;
					setTimeout( tick, 2200 );
					return;
				}
				setTimeout( tick, 70 );
				return;
			}

			charIndex--;
			typewriterEl.textContent = current.slice( 0, charIndex );
			if ( charIndex === 0 ) {
				deleting = false;
				stringIndex = ( stringIndex + 1 ) % strings.length;
				setTimeout( tick, 300 );
				return;
			}
			setTimeout( tick, 35 );
		}

		tick();
	} else if ( typewriterEl && strings.length ) {
		typewriterEl.textContent = strings[ 0 ];
	}
} )();
