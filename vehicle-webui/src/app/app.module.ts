import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { AppRoutingModule } from './app-routing.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    VehiclesModule
  ],
  providers: [
  ]
})
export class AppModule { }
