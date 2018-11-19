import { PasswordValidators } from './../../validators/password.validators';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.scss']
})
export class PasswordChangeFormComponent {
  private _form;

  constructor(fb: FormBuilder) {
    this._form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.passwordIsValid],
      password: fb.group({
        newPassword: ['', Validators.required],
        newPasswordConfirmation: ['', Validators.required]
      }, {validator: PasswordValidators.passwordsMatch})
    });
  }

  get form() {
    return this._form;
  }

  get oldPassword() {
    return this._form.get('oldPassword');
  }

  get password() {
    return this._form.get('password');
  }

  get newPassword() {
    return this._form.get('password.newPassword');
  }

  get newPasswordConfirmation() {
    return this._form.get('password.newPasswordConfirmation');
  }

  login() {

  }
}
