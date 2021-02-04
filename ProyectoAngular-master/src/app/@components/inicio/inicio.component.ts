import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.mostrar();
    this.mostrar2();
  }

  mostrar2 = () => {
    let iconosT=document.getElementsByClassName("twitter")[0] as HTMLElement;
    iconosT.style.display = "none";
    let iconosT2=document.getElementsByClassName("facebook")[0] as HTMLElement;
    iconosT2.style.display = "";
  }

  mostrar = () => {
    let header = document.getElementsByTagName("app-header")[0] as HTMLElement;
    let footer = document.getElementsByTagName("app-footer")[0] as HTMLElement;
    header.style.display = "";
    footer.style.display = "";
  }

}
