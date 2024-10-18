function userApp() {
    return {
      users: [], // Array to store added users
  
      addUser() {
        const form = document.getElementById('userForm');
        const pristine = new Pristine(form);
  
        // Validate form using Pristine.js
        const valid = pristine.validate();
        if (!valid) {
          alert('Please fill the form correctly.');
          return; // Stop if form is invalid
        }
  
        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;
        const role = document.getElementById('role').value;
  
        // Create new user object
        const newUser = { firstName, lastName, email, mobile, role };
  
        // Add new user to the users array
        this.users.push(newUser);
  
        // Reset the form after adding the user
        form.reset();
      }
    };
  }
  
  document.addEventListener('alpine:init', () => {
    // Initialize Alpine.js with userApp data
    Alpine.data('userApp', userApp);
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const pristine = new Pristine(form);
  
    // Add form submit listener with validation using Pristine.js
    form.addEventListener('submit', function (e) {
      const valid = pristine.validate(); // Trigger validation
      if (!valid) {
        e.preventDefault(); // Prevent form submission if invalid
        alert('Please fill the form correctly.');
      }
    });
  });
  