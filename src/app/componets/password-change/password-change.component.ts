import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css'],
})
export class PasswordChangeComponent {
  passwordForm: any = FormGroup;
  onSubmit() {
    if (this.passwordForm.valid) {
      console.log('passwordChanged', this.passwordForm.value);
    }
  }
  constructor(private _fb: FormBuilder) {
    this.passwordForm = this._fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          ),
        ],
      ],
    });
  }
}
