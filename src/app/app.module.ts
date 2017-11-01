import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {NgbdModalCustomclass} from './modal-customclass';

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalCustomclass
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
 entryComponents:[NgbdModalCustomclass],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
