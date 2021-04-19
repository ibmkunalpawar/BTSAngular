import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { ShowBugsComponent } from './show-bugs/show-bugs.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBugComponent,
    ShowBugsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
