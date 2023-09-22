import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from "../users/service/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; // A form group to handle login form controls

  // Constructor with dependencies injected (FormBuilder, UsersService, and Router)
  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) {
    // Initialize the loginForm FormGroup with form controls and validators
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email input field with required and email validators
      password: ['', [Validators.required, Validators.minLength(5)]] // Password input field with required and minLength validators
    });
  }

  // Function to handle the login button click
  onLoginClick() {
    if (this.loginForm.valid) { // Check if the form is valid (all fields meet validation criteria)
      const user = this.usersService.loginUser( // Attempt to log in the user using the UsersService
        this.loginForm.value.email, // Get the email from the form
        this.loginForm.value.password // Get the password from the form
      );

      if (user !== null) { // If a user object is returned (login successful)
        // Navigate to the "/dashboard" route
        this.router.navigate(['/dashboard']);
      } else { // If login fails (user is null)
        // Clear input fields and reset the form to its initial state
        this.loginForm.reset();
      }
    }
  }
}
