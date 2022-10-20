import { Component } from '@angular/core';

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
  public clients: string[] = ['Juanma', 'Carolina', 'Luís', 'Papá', 'Mamá'];
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

}
