import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FServComponent } from './f-serv.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [FServComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [FServComponent]
})
export class FServModule { }
