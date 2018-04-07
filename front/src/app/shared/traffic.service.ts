import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TrafficService {
  private API_URL: string = environment.API_URL + environment.API_CAMERA_PATH;

  constructor(private _http: HttpClient) {
  }

  getCamera(n1: number, n2: number) {
    return this._http.get(this.API_URL + n1 + '/' + n2);
  }

}
