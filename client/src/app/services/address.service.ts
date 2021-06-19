import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserinfoService } from './userinfo.service';


@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private _http:HttpClient,private _userS:UserinfoService) { }

  private AddressUrl = "/api/server/address"
  getAddresses(){
    let headers = new HttpHeaders(
      {
        'authorization' : this._userS.getToken() 
      }
    )
      
    return this._http.get(this.AddressUrl,{headers}).pipe(
      map((results:any)=>results.data)
    )
  }

  Add_address(data){
    let headers = new HttpHeaders(
      {
        'authorization' : this._userS.getToken() 
      }
    )
    return this._http.post(this.AddressUrl,data,{headers})
  }

  Delete_Address(id){
    return this._http.delete(this.AddressUrl+"/"+id)
  }

}
