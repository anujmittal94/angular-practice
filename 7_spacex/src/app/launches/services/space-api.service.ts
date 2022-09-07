import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LaunchQuery } from '../models/launch-query.model';
import { Launch } from '../models/launch.model';

@Injectable({
  providedIn: 'root',
})
export class SpaceApiService {
  baseUrl: string = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getLaunches(param: LaunchQuery): Observable<any> {
    let params = new HttpParams();
    params = params.set('limit', 100);
    if (param['launch_success']) {
      params = params.set('launch_success', param['launch_success']);
    }
    if (param['land_success']) {
      params = params.set('land_success', param['land_success']);
    }
    if (param['launch_year']) {
      params = params.set('launch_year', param['launch_year']);
    }
    return this.http.get<Launch[]>(this.baseUrl, { params }).pipe();
  }
}
