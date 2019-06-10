import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public TIME_OUT = 2900;
  public loginForm: FormGroup;
  public isLoading = false;
  public formErrors = {email: '', password: ''};
  public validationMessages = {
    email: {
      required: 'Email is required.',
      email: 'Email must be a valid email'
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 4 characters long.',
      maxlength: 'Password cannot be more than 40 characters long.',
    }
  };

  constructor(private toastr: ToastrService,
              private auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    // Building Form
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
    });
    // Binding Form Validator
    this.loginForm.valueChanges.subscribe((data) => this.onValueChanged(data));
  }

  // Updates validation state on form changes.
  onValueChanged(data: any) {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      // Clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  login(): void {
    this.isLoading = true;
    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.isLoading = false;
        this.toastr.success('You\'ll automatically be redirected now.', 'Login Success!', {timeOut: this.TIME_OUT});
        setTimeout(() => { this.router.navigate(['']); }, this.TIME_OUT + 100);
      })
      .catch((error) => {
        this.isLoading = false;
        this.toastr.error(error.message, 'Login Error!', {timeOut: this.TIME_OUT});
      });
  }
}
