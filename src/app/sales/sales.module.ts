import { NgModule } from '@angular/core';

// ** Modules **
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// ** Components **
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoComunsComponent } from './pages/no-comuns/no-comuns.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrganizeComponent } from './pages/organize/organize.component';



@NgModule({
  declarations: [
    NumbersComponent,
    NoComunsComponent,
    BasicsComponent,
    OrganizeComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NoComunsComponent,
    BasicsComponent,
    OrganizeComponent
  ]
})
export class SalesModule { }
