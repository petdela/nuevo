import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletinComponent } from './boletin.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { SubHeaderModule } from '../sub-header/sub-header.module';
import { SideBarModule } from '../side-bar/side-bar.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [BoletinComponent],
  imports: [
    CommonModule,
    ProgressBarModule,
    SubHeaderModule,
    SideBarModule,
    AppRoutingModule
  ],
  exports:[BoletinComponent]
})
export class BoletinModule { }
