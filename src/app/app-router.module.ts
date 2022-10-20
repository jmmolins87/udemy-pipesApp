import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NoComunsComponent } from './sales/pages/no-comuns/no-comuns.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrganizeComponent } from './sales/pages/organize/organize.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'no-comuns',
    component: NoComunsComponent
  },
  {
    path: 'organize',
    component: OrganizeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class AppRouterModule { }
