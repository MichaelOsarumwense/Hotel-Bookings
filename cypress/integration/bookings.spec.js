/// <reference types="cypress" />
import { form, submitedDetails, dom } from '../fixtures/selectors.json';
import { validForm, invalidForm } from '../fixtures/bookingDetails.json';

describe('Hotel booking Test', () => {
	before(() => {
		cy.visit('/');
	});

	context('Create Booking', () => {
		it('Creates a valid booking', () => {
			/**created a custom command to filup the booking form.
			see ../support/commands (folder for custom command)*/
			cy.fillBookingForm(validForm);

			cy.get(form.save).click();
			cy.get(submitedDetails).contains(validForm.firstName);
			cy.get(submitedDetails).contains(validForm.lastName);
		});
	}),
		context('Delete Booking', () => {
			it('Deletes Existing Booking', () => {
				cy.get(form.delete).last().click();
				cy.get(dom).should('not.contain', validForm.firstName);
				cy.get(dom).should('not.contain', validForm.lastName);
			});
		}),
		context('Invalid Booking', () => {
			it('Creates a Booking with invalid Price', () => {
				cy.fillBookingForm(invalidForm);
				cy.get(form.save).click();
				cy.get(dom).should('not.contain', invalidForm.lastName);
			});
		});
});
