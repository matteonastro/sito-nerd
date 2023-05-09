import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { fataComponent } from './fata/fata.component';
import { PietraComponent } from './pietra/pietra.component';
import { UtopiaComponent } from './utopia/utopia.component';
import { ExodiaComponent } from './exodia/exodia.component';

@NgModule({
  declarations: [
    AppComponent,
  fataComponent,
  PietraComponent,
  UtopiaComponent,
  ExodiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }