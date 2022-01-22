import { form } from '../fixtures/selectors.json';

Cypress.Commands.add('fillBookingForm', (formDetails) => {
	cy.get(form.firstName).type(formDetails.firstName);
	cy.get(form.lastName).type(formDetails.lastName);
	cy.get(form.price).type(formDetails.price);
	cy.get(form.deposit).select(formDetails.deposit);
	cy.get(form.checkIn).type(formDetails.checkIn);
	cy.get(form.checkOut).type(formDetails.checkOut);
});
