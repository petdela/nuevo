import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css','../../../assets/css/admin.css']
})
export class ReportesComponent implements OnInit {

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
    let icono= document.getElementById("oculto");
    let iconosT=document.getElementsByClassName("twitter")[0] as HTMLElement;
    let iconosT2=document.getElementsByClassName("facebook")[0] as HTMLElement;
    //icono.style.visibility ="hidden";
    icono.style.display = "none";
    iconosT.style.display = "none";
    iconosT2.style.display = "none";
  }
}
