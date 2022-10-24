import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html'
})
export class OrganizeComponent {

  public type: boolean = false;
  public sortBy: string = '';
  public heros: Hero[] = [
    {
      name: 'Superman',
      flight: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flight: false,
      color: Color.black
    },
    {
      name: 'Robin',
      flight: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      flight: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      flight: true,
      color: Color.green
    }
  ];

  changeType() {
    this.type = !this.type;
  }

  changeSort( valor: string ) {
    this.sortBy = valor;
  }

}
