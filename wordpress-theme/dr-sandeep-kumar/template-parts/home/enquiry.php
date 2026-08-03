<?php
/**
 * Contact form. Submits to admin-post.php?action=dsk_enquiry, handled in
 * functions.php (dsk_handle_enquiry), which emails the address set in
 * Customize → Home Page Content → Contact.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$status = isset( $_GET['enquiry'] ) ? sanitize_key( wp_unslash( $_GET['enquiry'] ) ) : '';
?>
<section class="enquiry" id="enquiry" data-reveal>
	<div class="wrap enquiry__inner">
		<h2 class="enquiry__heading"><?php echo esc_html( dsk_mod( 'dsk_contact_heading' ) ); ?></h2>

		<?php if ( 'sent' === $status ) : ?>
			<p class="enquiry__notice enquiry__notice--success"><?php esc_html_e( 'Thanks — your enquiry has been sent.', 'dsk-home' ); ?></p>
		<?php elseif ( 'error' === $status ) : ?>
			<p class="enquiry__notice enquiry__notice--error"><?php esc_html_e( 'Something went wrong — please check the form and try again.', 'dsk-home' ); ?></p>
		<?php endif; ?>

		<form class="enquiry__form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
			<input type="hidden" name="action" value="dsk_enquiry" />
			<?php wp_nonce_field( 'dsk_enquiry', 'dsk_enquiry_nonce' ); ?>
			<div class="dsk-honeypot" aria-hidden="true">
				<label for="dsk_website"><?php esc_html_e( 'Website', 'dsk-home' ); ?></label>
				<input type="text" id="dsk_website" name="dsk_website" tabindex="-1" autocomplete="off" />
			</div>

			<div class="enquiry__row enquiry__row--two">
				<div class="field">
					<label class="screen-reader-text" for="first_name"><?php esc_html_e( 'First Name', 'dsk-home' ); ?></label>
					<input type="text" id="first_name" name="first_name" placeholder="<?php esc_attr_e( 'First Name*', 'dsk-home' ); ?>" required />
				</div>
				<div class="field">
					<label class="screen-reader-text" for="last_name"><?php esc_html_e( 'Last Name', 'dsk-home' ); ?></label>
					<input type="text" id="last_name" name="last_name" placeholder="<?php esc_attr_e( 'Last Name*', 'dsk-home' ); ?>" required />
				</div>
			</div>

			<div class="enquiry__row enquiry__row--two">
				<div class="field">
					<label class="screen-reader-text" for="email"><?php esc_html_e( 'Email Address', 'dsk-home' ); ?></label>
					<input type="email" id="email" name="email" placeholder="<?php esc_attr_e( 'Email Address*', 'dsk-home' ); ?>" required />
				</div>
				<div class="field">
					<label class="screen-reader-text" for="phone"><?php esc_html_e( 'Telephone', 'dsk-home' ); ?></label>
					<input type="tel" id="phone" name="phone" placeholder="<?php esc_attr_e( 'Telephone', 'dsk-home' ); ?>" />
				</div>
			</div>

			<div class="enquiry__row">
				<div class="field">
					<label class="screen-reader-text" for="enquiry"><?php esc_html_e( 'Enquiry', 'dsk-home' ); ?></label>
					<textarea id="enquiry" name="enquiry" rows="6" placeholder="<?php esc_attr_e( 'Enquiry*', 'dsk-home' ); ?>" required></textarea>
				</div>
			</div>

			<label class="enquiry__consent">
				<input type="checkbox" name="consent" required />
				<span><?php esc_html_e( 'I consent to my submitted information being stored so my enquiry can be answered.', 'dsk-home' ); ?> <span class="required">*</span></span>
			</label>

			<button type="submit" class="btn btn--pill"><?php esc_html_e( 'Send Enquiry', 'dsk-home' ); ?></button>
		</form>
	</div>
</section>
