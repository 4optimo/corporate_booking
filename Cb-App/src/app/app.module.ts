import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
// import './polyfills';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import 'web-animations-js';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { MatInputModule, MatButtonModule, MatSelectModule, MatTabsModule, MatCardModule, MatIcon, MatTabGroup} from '@angular/material';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { PricePopupComponent } from './price-popup/price-popup.component';
import { InformationComponent } from './information/information.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AlertsComponent,
    BookingSummaryComponent,
    PricePopupComponent,
    InformationComponent,
    TabPanelComponent
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
     ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
