import { UsernameValidators } from './../../validators/username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private authService: AuthorizationService) {}

  private _loginForm = new FormGroup({
    username: new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.containSpace,
    ]),
    password: new FormControl('', 
    [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  get loginForm() {
    return this._loginForm;
  }
  
  get username() {
    return this._loginForm.get('username');
  }

  get password() {
    return this._loginForm.get('password');
  }

  login() {
    this.authService.login(this._loginForm.value)
      .subscribe( res => {
        if(res) {
          const returnUrl = this.activeRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/'])
        } else {
          this.invalidLogin = true
        }
      });
  }
}
