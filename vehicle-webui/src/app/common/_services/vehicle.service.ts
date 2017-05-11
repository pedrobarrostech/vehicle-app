import { Injectable } from '@angular/core';
import { Vehicle } from '../_models/vehicle';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleService {
  private url = 'http://localhost:8080/vehicles'; 
  //private token = 'Bearer ' + JSON.parse(localStorage.getItem('currentVehicle')).token;
  private headers = new Headers({
      'Accept': ' application/json',
      'Content-Type': 'application/json'
    //  'Authorization': this.token
  });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  getAll () {
    return this.http.get(this.url, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  add (vehicle: Vehicle): Observable<Vehicle> {
    let body = JSON.stringify(vehicle);
    return this.http.post(this.url, body, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);              
  }

  update(vehicle: Vehicle) {
    let body = JSON.stringify(vehicle);
    return this.http.put(this.url + '/' + vehicle.id, body, this.options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  remove(vehicle: Vehicle)  {
    return this.http.delete(this.url + '/' + vehicle.id, this.options)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message : error.errorCode ? `${error.errorCode} - ${error.message}` : 'Server error';
    console.error(error); // log to console instead
    return Observable.throw(error);
  }

}
