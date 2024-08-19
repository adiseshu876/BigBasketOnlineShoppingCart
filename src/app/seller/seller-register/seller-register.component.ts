import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { SellerControlsService } from '../seller-controls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent {
  RegistrationForm:any= FormGroup;

  constructor(private fb: FormBuilder,private _seller:SellerControlsService,private routes:Router) {
    this.RegistrationForm = this.fb.group({
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
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator('password', 'confirmPassword') });
  }
  passwordMatchValidator(password: string, confirmPassword: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const passwordControl = control.get(password);
      const confirmPasswordControl = control.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
        // return if another validator has already found an error on the confirmPasswordControl
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  OnSubmit() {
    if (this.RegistrationForm.valid) {
      const { email, password, mobile } = this.RegistrationForm.value;
      this._seller.create(email, password, mobile).subscribe((Response) => {
        console.log('registration success', Response);
        setTimeout(() => {
          console.log('form Registered', this.RegistrationForm.value);
          this.routes.navigate(['/seller-auth']);
        }, 2000);
      });
    } else {
      console.log('check the validation', Response);
    }
  }
}
