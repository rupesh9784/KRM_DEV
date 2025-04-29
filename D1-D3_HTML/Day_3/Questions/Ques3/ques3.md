#### Instructions

Create an HTML file named `registration_form.html` that includes the following elements:

1. **Form Structure**:

   - A `<form>` element to contain the entire registration form.

2. **Input Fields**:

   - A text input for the user's full name (readonly).
   - A password input for the user's password with a minimum length.
   - An email input for the user's email address.
   - A number input for the user's age with minimum 18 and maximum 60 values.
   - A date input for the user's date of birth (DOB).

3. **Labels**:

   - Each input field should have an associated `<label>` with the `for` attribute correctly set to the corresponding input's `id`.
   - Clicking on the label should focus the corresponding input field.

4. **Additional Form Controls**:

   - A set of radio buttons to select gender (Male, Female, Other).
   - A dropdown (`<select>`) to choose a city (e.g., Delhi, Mumbai, Bangalore, Chennai).
   - A group of checkboxes for hobbies (e.g., Reading, Music, Sports).
   - A submit button labeled "Register".

5. **Validation**:

   - The full name input should be readonly.
   - The password input should have a `minlength` attribute set to 8.
   - The age input should have `min` and `max` attributes set.
   - All fields must be marked as `required` except for the checkboxes.

##### Example Content Details:

- Full Name: Readonly field (e.g., "John Doe")
- Password: Minimum length of 8 characters
- Email: Valid email format
- Age: Minimum 18, Maximum 60
- DOB: Required date input
- Gender: One option must be selected
- City: One option must be selected
- Hobbies: Optional (can select more than one)
- Submit Button: Labeled as "Register"
