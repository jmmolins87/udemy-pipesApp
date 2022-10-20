import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// ** My modules **
import { AppRouterModule } from './app-router.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

// ** Cambiar el locale de la app **
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs );
registerLocaleData( localeFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    PrimeNgModule,
    SalesModule,
    SharedModule
  ],
  providers: [
    { 
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
