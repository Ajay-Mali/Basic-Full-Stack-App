import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MapTokenResponse } from '../models/map-token';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private _http: HttpClient) {
    this.generateToken();
  }

  private tokenUrl =
    '/api/security/oauth/token?grant_type=client_credentials&client_id=33OkryzDZsJgPCJ2Y90ucjS--1iDOeWNvt10ge0X3INgbBWGq5xz78y0nNSjkzZr7IRvmxOpYo0jNBcrxWTNAA==&client_secret=lrFxI-iSEg-sdcC91Q--rcC3NF12bfxcb_uUgpX3qdwtjZGJZbVh8b6Tw2rxk1KIYq957j8LIgnXTkLFdd3M7qswlsgTbG2B';

  private tokenResponse: MapTokenResponse;
  private addressUrl = '/api/places/geocode?itemCount=5&address=';

  generateToken() {
    return this._http.post(this.tokenUrl, {}).subscribe((tokenData) => {
      this.tokenResponse = <MapTokenResponse>tokenData;
      // console.log({ tokenResponse: this.tokenResponse });
    });
  }

  getAddresses(address: String) {
    // console.log('searching Addresses for ' + address);
    return this._http
      .get(this.addressUrl + address, {
        headers: {
          Authorization:
            this.tokenResponse.token_type +
            ' ' +
            this.tokenResponse.access_token,
        },
      })
      .pipe(map((results: any) => results.copResults));
  }
}
