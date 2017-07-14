import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PpremplacePipe } from './ppremplace.pipe';
import { DirectiveEventDirective } from './directive-event.directive';

@NgModule({
  declarations: [
    AppComponent,
    PpremplacePipe,
    DirectiveEventDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
