import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TwoDigitPipe } from './pipes/two-digit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TwoDigitPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
