import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
