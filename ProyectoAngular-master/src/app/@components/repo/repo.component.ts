import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css','../../../assets/css/admin.css']
})
export class RepoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.carga();
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
    icono.style.display = "none";
    iconosT.style.display = "none";
    iconosT2.style.display = "none";
  }
  carga = () => {
    
const slidePage = document.querySelector(".slide-page");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  setTimeout(function(){
    alert("Tus cambios han sido anadidos de manera exitosa");
    location.reload();
  },800);
});  

  }
}
