import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultipleElementsComponent } from './multiple-elements/multiple-elements.component';
import { ResizableModule } from 'angular-resizable-element';


@NgModule({
  declarations: [
    AppComponent,
    MultipleElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResizableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
