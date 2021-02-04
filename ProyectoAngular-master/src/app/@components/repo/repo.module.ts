import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoComponent } from './repo.component';
import { SideBarModule } from '../side-bar/side-bar.module';



@NgModule({
  declarations: [RepoComponent],
  imports: [
    CommonModule,
    SideBarModule
  ],
  exports:[
    RepoComponent,
  ]
})
export class RepoModule { }