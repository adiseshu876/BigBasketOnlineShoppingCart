import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerControlsService } from '../seller-controls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  sellerForm: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private _seller: SellerControlsService,
    private _route: Router
  ) {
    this.sellerForm = this.fb.group({
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
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.sellerForm.valid) {
      const { email, password } = this.sellerForm.value;
      this._seller.login(email, password).subscribe((user) => {
        if (user) {
          console.log('user checking', user);
          this._route.navigate(['/seller-home']);
        } else{
          console.log('not a valid user',user);
          
        }
      });
      console.log(this.sellerForm.value, 'welcome to angular');
    }
  }
}