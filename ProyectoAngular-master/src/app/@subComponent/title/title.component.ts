import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() texto: string;
  constructor() { }

  ngOnInit(): void {
  }

}
