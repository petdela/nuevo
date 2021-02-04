import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { TitleModule } from 'src/app/@subComponent/title/title.module';
import { FServModule } from 'src/app/@subComponent/f-serv/f-serv.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    TitleModule,
    FServModule,
    AppRoutingModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
