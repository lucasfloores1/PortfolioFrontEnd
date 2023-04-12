import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InfoComponent } from './components/info/info.component';
import { EditBtnComponent } from './components/edit-btn/edit-btn.component';
import { EducationComponent } from './components/education/education.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { DeleteBtnComponent } from './components/delete-btn/delete-btn.component';
import { InfoEditComponent } from './components/info-edit/info-edit.component';
import { AddEducationComponent } from './components/add-education/add-education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InfoComponent,
    EditBtnComponent,
    EducationComponent,
    EducationCardComponent,
    AddBtnComponent,
    DeleteBtnComponent,
    InfoEditComponent,
    AddEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
