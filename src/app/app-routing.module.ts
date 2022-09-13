import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HostComponent } from './host/host.component';

const routes: Routes = [
  {
    path: '', component: HostComponent,
  },
  {
    path: 'reservar', component: BookingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
