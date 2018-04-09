import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AlertsComponent,
    BookingSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
