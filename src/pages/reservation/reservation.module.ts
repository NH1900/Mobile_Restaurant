import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationPage } from './reservation';

@NgModule({
  declarations: [
    ReservationPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationPage),
  ],
})
export class ReservationPageModule {}
