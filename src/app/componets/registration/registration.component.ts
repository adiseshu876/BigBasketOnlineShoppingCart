import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  RegistrationForm: any = FormGroup;

  constructor(
    private _fb: FormBuilder,
    private route: Router,
    private _user: UserService
  ) {
    this.RegistrationForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  OnSubmit() {
    if (this.RegistrationForm.valid) {
      const { email, password, mobile } = this.RegistrationForm.value;
      this._user.create(email, password, mobile).subscribe((Response) => {
        console.log('registration success', Response);
        setTimeout(() => {
          console.log('form Registered', this.RegistrationForm.value);
          this.route.navigate(['/login']);
        }, 2000);
      });
    } else {
      console.log('check the validation', Response);
    }
  }
  ngOnInit(): void {
    this.OnSubmit();
  }
}
