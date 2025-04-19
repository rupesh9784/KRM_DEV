#### Instructions

Create an HTML file named `credit_card_form.html` that includes the following elements:

1. **Form Structure**:

   - A `<form>` element to collect credit card details securely.

2. **Input Fields**:

   - A text input for the cardholder's full name.
   - A number input for the credit card number (16-digit).
   - A date input for the card's expiry date.
   - A number input for the CVV (3-digit).
   - A dropdown (`<select>`) for selecting the card type (e.g., Visa, MasterCard, American Express).
   - A checkbox to agree to terms and conditions.
   - A submit button labeled "Pay Now".

3. **Labels**:

   - Each input field should have an associated `<label>` with the `for` attribute correctly pointing to the input’s `id`.
   - Clicking on the label should focus the related input.

4. **Validation**:

   - Card number must be 16 digits.
   - CVV must be 3 digits.
   - Expiry date must not be in the past.
   - Full name should be required.
   - The form should not be submitted unless the terms and conditions checkbox is checked.

##### Example Content Details:

- Cardholder Name: "Sacheev Kumar"
- Card Number: 16-digit number only
- Expiry Date: Format should be mm/yyyy (future date only)
- CVV: Exactly 3 digits
- Card Type: Dropdown with options like Visa, MasterCard, American Express
- Terms Checkbox: Must be checked before submission
- Submit Button: "Pay Now"
