import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Material } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { FGroupComponent } from './f-group/f-group.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FGroupComponent
  ],
  imports: [
    BrowserModule,
    Material,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
