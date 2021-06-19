import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private Data: User;
  loginForm: FormGroup;
  constructor(private _userService: UserinfoService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      useremail: new FormControl('', [Validators.required, Validators.email]),
      userpass: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  fromsubmit() {
    this.Data = {
      email: this.loginForm.value.useremail,
      password: this.loginForm.value.userpass,
    };
    // console.log(this.Data);
    this._userService.login(this.Data);
  }
}
