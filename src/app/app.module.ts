import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialmodulesModule } from './materialmodules/materialmodules.module';


@NgModule({
  declarations: [
    AppComponent,
    AngularmaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialmodulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
