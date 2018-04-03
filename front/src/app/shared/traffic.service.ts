import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TrafficService {
  private API_URL: string = environment.API_URL;

  constructor(private _http: HttpClient) {
  }

  getCamera(query: string) {
    return this._http.get(this.API_URL + '');
  }


}
