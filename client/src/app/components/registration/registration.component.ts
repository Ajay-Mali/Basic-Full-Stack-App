import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { MapService } from 'src/app/services/map.service';
import { UserinfoService } from 'src/app/services/userinfo.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private _map: MapService,
    private _user: UserinfoService,
    private _router: Router
  ) {}
  user: User;
  UserForm: FormGroup;
  Addresses: any;
  selectedAddress: any = {};
  ngOnInit(): void {
    this.UserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onAddressType(value) {
    this._map.getAddresses(value).subscribe((AddressResponse) => {
      this.Addresses = AddressResponse;
      //  console.log(this.Addresses)
    });
    // console.log(this.selectedAddress);
  }

  onselectAddress(Address) {
    this.selectedAddress = Address;
    // console.log({ selectedAddress: Address });
    this.Addresses = [];
  }

  fromsubmit() {
    this.user = {
      name: this.UserForm.value.name,
      email: this.UserForm.value.email,
      password: this.UserForm.value.password,
      address: this.UserForm.value.address,
    };
    // console.log(this.user)
    this._user.Registration(this.user).subscribe(
      (data) => {
        // console.log(data)
        this._router.navigate(['login']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
