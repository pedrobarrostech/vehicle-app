import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VehiclesComponent } from './vehicles.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'veiculos', component: VehiclesComponent }
    ])
  ]
})
export class VehiclesRoutingModule { }
