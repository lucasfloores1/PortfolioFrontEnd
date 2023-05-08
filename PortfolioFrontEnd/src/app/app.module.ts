import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InfoComponent } from './components/info/info.component';
import { EducationComponent } from './components/education/education.component';
import { EducationCardComponent } from './components/education-card/education-card.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducationEditComponent } from './components/education-edit/education-edit.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ExperienceAddComponent } from './components/experience-add/experience-add.component';
import { ExperienceEditComponent } from './components/experience-edit/experience-edit.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';
import { AboutComponent } from './components/about/about.component';
import { AboutEditComponent } from './components/about-edit/about-edit.component';
import { InfoEditComponent } from './components/info-edit/info-edit.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsAddComponent } from './components/skills-add/skills-add.component';
import { SkillsEditComponent } from './components/skills-edit/skills-edit.component';
import { SkillsItemComponent } from './components/skills-item/skills-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {DialogModule} from '@angular/cdk/dialog';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InfoComponent,
    EducationComponent,
    EducationCardComponent,
    AddEducationComponent,
    EducationEditComponent,
    ExperienceComponent,
    ExperienceCardComponent,
    ExperienceAddComponent,
    ExperienceEditComponent,
    ProjectComponent,
    ProjectAddComponent,
    ProjectCardComponent,
    ProjectEditComponent,
    AboutComponent,
    AboutEditComponent,
    InfoEditComponent,
    SkillsComponent,
    SkillsAddComponent,
    SkillsEditComponent,
    SkillsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatIconModule,
    LayoutModule,
    DialogModule,
    MatDialogModule,
    MatDividerModule

  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
