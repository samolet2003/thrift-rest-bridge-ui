import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'app/app-routing.module';
import { FontModule } from 'app/font.module';
import { MaterialModule } from 'app/material.module';

import { AppComponent } from 'app/app.component';
import { BridgeComponent } from 'app/bridge/bridge.component';
import { OperationProxyComponent } from 'app/bridge/components/operation-proxy/operation-proxy.component';
import { ServiceListComponent } from 'app/bridge/components/service-list/service-list.component';
import { HeaderComponent } from 'app/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BridgeComponent,
    HeaderComponent,
    OperationProxyComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
