import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {CameraComponent, Error404Component, HeaderComponent, ListComponent, StatisticComponent} from './core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {TrafficService} from './shared/traffic.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatisticComponent,
    CameraComponent,
    ListComponent,
    Error404Component
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'front'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    TrafficService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
