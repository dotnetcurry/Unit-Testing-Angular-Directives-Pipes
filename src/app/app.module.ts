import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplyStyleDirective } from './app-style.directive';
import { MyAttrDirective } from './my-attr.directive';
import { HostBindingsDirective } from './host-bindings.directive';
import { DefaultvaluePipe } from './defaultvalue.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApplyStyleDirective,
    MyAttrDirective,
    HostBindingsDirective,
    DefaultvaluePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
