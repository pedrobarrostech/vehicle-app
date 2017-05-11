import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/veiculos', pathMatch: 'full' }
    ])
  ]
})
export class AppRoutingModule { }
