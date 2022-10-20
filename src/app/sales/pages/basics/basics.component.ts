import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

  public nameLower: string = 'juanma';
  public nameUpper: string = 'JUANMA';
  public completeName: string = 'JuanMa MoLiNs COrtéS'
  public today: Date = new Date(); // Fecha de hoy


  constructor() { }

  ngOnInit(): void {
  }

}
