import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { ContentComponent } from './content/content.component';
import { HostComponent } from './host/host.component';
defineLocale('pt', ptBrLocale);
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    BookingComponent,
    HostComponent
  ],
  imports: [
    TypeaheadModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" }, //replace "en-US" with your locale
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
