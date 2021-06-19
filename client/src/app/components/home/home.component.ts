import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Addresses: any;
  selectedAddress: any = {};
  Address: any;
  Data: any = {};
  constructor(
    private _map: MapService,
    private _AddressService: AddressService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getAddresses();
  }

  getAddresses() {
    this._AddressService.getAddresses().subscribe(
      (Address: { massage: string; count: string; data: any[] }) => {
        // console.log(Address);
        this.Address = Address;
        this.selectedAddress = {};
      },
      (err) => {
        console.log(err);

        this.Address = {};
      }
    );
  }
  onAddressType(value) {
    // console.log(value);
    this._map.getAddresses(value).subscribe((AddressResponse) => {
      this.Addresses = AddressResponse;
      // console.log(this.Addresses);
    });
    // console.log(this.selectedAddress);
  }

  onselectAddress(Address) {
    // console.log(Address);
    this.selectedAddress = Address;
    // console.log({ selectedAddress: Address });
    this.Addresses = [];
  }

  AddAddress() {
    if (this.selectedAddress.formattedAddress == '') {
      alert('plase Enter Address..');
    } else {
      this.Data = {
        Address: this.selectedAddress.formattedAddress,
      };
      // console.log(this.Data);
      this._AddressService.Add_address(this.Data).subscribe(
        (data) => {
          // console.log(data);
          this.getAddresses();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  deleteAddrss(id) {
    // console.log(id);
    if (confirm('Are You Sure Delete This Address...')) {
      this._AddressService.Delete_Address(id).subscribe(
        (data) => {
          // console.log(data);
          this.getAddresses();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }


  cleanToken(){
    localStorage.clear()
    this._router.navigate(['\login'])
  }
}
