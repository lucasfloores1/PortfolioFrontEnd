import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InfoComponent } from './components/info/info.component';
import { EditBtnComponent } from './components/edit-btn/edit-btn.component';
import { EducationComponent } from './components/education/education.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { DeleteBtnComponent } from './components/delete-btn/delete-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InfoComponent,
    EditBtnComponent,
    EducationComponent,
    EducationCardComponent,
    AddBtnComponent,
    DeleteBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
