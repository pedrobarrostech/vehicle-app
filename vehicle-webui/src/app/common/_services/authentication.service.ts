import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    private url = 'http://localhost:8080/authentication';
    private headers = new Headers({ 
        'Accept': ' application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentVehicle = JSON.parse(localStorage.getItem('currentVehicle'));
        this.token = currentVehicle && currentVehicle.token;
    }

    login(plate, image): Observable<boolean> {

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('plate', plate);
        urlSearchParams.append('image', image);
        let body = urlSearchParams.toString();

        return this.http.post(this.url, body, this.options)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().authToken;
                if (token) {
                    // set token property
                    this.token = token;

                    // store plate and jwt token in local storage to keep vehicle logged in between page refreshes
                    localStorage.setItem('currentVehicle', JSON.stringify({ plate: plate, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove vehicle from local storage to log vehicle out
        this.token = null;
        localStorage.removeItem('currentVehicle');
    }
}
