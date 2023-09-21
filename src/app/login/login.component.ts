import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from "../users/service/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService,  private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {
  }

  onLoginClick() {
    if (this.loginForm.valid) {
      const user = this.usersService.loginUser(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      if (user !== null) {
        // Login successful, navigate to "/dashboard"
        this.router.navigate(['/dashboard']);
      } else {
        // Login failed, clear input fields and reset the form
        this.loginForm.reset();
      }
    }
  }
}
