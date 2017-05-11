import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VehiclesComponent } from './vehicles.component';
import { AuthGuard } from '../common/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'vehicles', component: VehiclesComponent
      //, canActivate: [AuthGuard] 
      }
    ])
  ]
})
export class VehiclesRoutingModule { }
