import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../common/_services/authentication.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private _authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this._authenticationService.logout();
    }

    login() {
        this.loading = true;
        this._authenticationService.login(this.model.plate, this.model.image)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Plate or image is incorrect';
                    this.loading = false;
                }
            });
    }
}
