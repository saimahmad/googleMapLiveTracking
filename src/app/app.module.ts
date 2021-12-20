import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyD2Hlaxv77H5tmOYV1GyYecLIyTyBn9nbA"
    }),
    AgmDirectionModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
