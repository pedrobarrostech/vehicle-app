import { NgModule } from '@angular/core';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { CommonModule } from '../common/common.module';

@NgModule({
  imports: [
    VehiclesRoutingModule,
    CommonModule
  ],
  declarations: [
    VehiclesComponent
  ]
})
export class VehiclesModule { }
