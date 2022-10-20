import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comuns',
  templateUrl: './no-comuns.component.html'
})
export class NoComunsComponent {

  // ** i18nSelect **
  public name: string = 'Juanma';
  public gender: string = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeUser() {
    this.name = 'Carolina';
    this.gender = 'female';
  }

  // ** i18nPlural **
  public disabled: boolean = false;
  public clients: string[] = ['Juanma', ' ' + 'Carolina', ' ' + 'Luís', ' ' + 'Mamen'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos # cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient() {
    this.clients.shift();
    if (this.clients.length === 0) {
      this.disabled = true;
    }
  }
  
  // ** slice **
  public completeName: string = 'Juan María Molins Cortés';

  // ** keyValue **
  public people = {
    name: 'Juanma',
    years: 35,
    location: 'Madrid'
  }

  // ** json **
  public heros = [
    {
      name: 'Superman',
      flight: true
    },
    {
      name: 'Robin',
      flight: false
    },
    {
      name: 'Aquaman',
      flight: false
    },
    {
      name: 'Batman',
      flight: false
    }
  ]

  // ** async **
  myObservable = interval( 1000 );
  promiseValor = new Promise(( resolve, reject ) => {
    
    setTimeout( () => {
      resolve('Tenemos data de la promesa')
    }, 3500)

  })

}
