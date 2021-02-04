import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css','../../../assets/css/login.css']
})
export class LogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ocultar();
    this.ocultar2();
  }
  ocultar = () => {
    let header = document.getElementsByTagName("app-header")[0] as HTMLElement;
    let footer = document.getElementsByTagName("app-footer")[0] as HTMLElement;
    header.style.display = "none";
    footer.style.display = "none";
  }

  ocultar2 = () => {
    let iconosT=document.getElementsByClassName("twitter")[0] as HTMLElement;
    iconosT.style.display = "none";
    let iconosT2=document.getElementsByClassName("facebook")[0] as HTMLElement;
    iconosT2.style.display = "none";
  }
}
