import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule} from '@angular/material';
import { FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { PricePopupComponent } from './price-popup/price-popup.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AlertsComponent,
    BookingSummaryComponent,
    PricePopupComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
