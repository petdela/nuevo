import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-ba',
  templateUrl: './contact-ba.component.html',
  styleUrls: ['./contact-ba.component.css','../../../assets/css/admin.css']
})
export class ContactBaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cargarStep();
  }
  cargarStep = () => {

    const slidePage = document.querySelector(".slide-page") as HTMLElement;
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");

    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    let current = 1;
    
    nextBtnFirst.addEventListener("click", function(event){
      event.preventDefault();
      slidePage.style.marginLeft = "-25%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    });
    nextBtnSec.addEventListener("click", function(event){
      event.preventDefault();
      slidePage.style.marginLeft = "-50%";
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
    });
    submitBtn.addEventListener("click", function(){
      bullet[current - 1].classList.add("active");
      progressCheck[current - 1].classList.add("active");
      progressText[current - 1].classList.add("active");
      current += 1;
      setTimeout(function(){
        alert("Tus formulario ha sido enviado de manera exitosa");
        location.reload();
      },800);
    });
    
    prevBtnSec.addEventListener("click", function(event){
      event.preventDefault();
      slidePage.style.marginLeft = "0%";
      bullet[current - 2].classList.remove("active");
      progressCheck[current - 2].classList.remove("active");
      progressText[current - 2].classList.remove("active");
      current -= 1;
    });
    prevBtnThird.addEventListener("click", function(event){
      event.preventDefault();
      slidePage.style.marginLeft = "-25%";
      bullet[current - 2].classList.remove("active");
      progressCheck[current - 2].classList.remove("active");
      progressText[current - 2].classList.remove("active");
      current -= 1;
    });
  
  }
}
