import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { BodyComponent } from './body/body.component';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
