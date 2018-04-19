import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
// import './polyfills';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import 'web-animations-js';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule,
  MatExpansionModule,
  MatCheckboxModule,

} from '@angular/material';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { PricePopupComponent } from './price-popup/price-popup.component';
import { InformationComponent } from './information/information.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { DocumentSelectComponent } from './document-select/document-select.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AlertsComponent,
    BookingSummaryComponent,
    PricePopupComponent,
    InformationComponent,
    BookingDetailComponent,
    DocumentSelectComponent,

  ],
   imports: [
     BrowserModule,
     BrowserAnimationsModule,
     FormsModule,
     MatButtonModule,
     MatInputModule,
     MatTabsModule,
     MatSelectModule,
     MatIconModule,
     MatCardModule,
     MatTabsModule,
     MatExpansionModule,
     ReactiveFormsModule,
     MatCheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
