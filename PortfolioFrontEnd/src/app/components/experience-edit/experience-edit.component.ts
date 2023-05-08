import { Component, Inject } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EducationEditComponent } from '../education-edit/education-edit.component';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent {

  private updatedExperience : Experience;

  name : string = this.data.name;
  company : string = this.data.company;
  time : string = this.data.time;

  constructor( public dialogRef : MatDialogRef<EducationEditComponent> , @Inject(MAT_DIALOG_DATA) public data : Experience ){

    this.updatedExperience = data

  }


  closeDialog(){

    this.data.name = this.name
    this.data.company = this.company
    this.data.time = this.time

    this.dialogRef.close(this.data)

  }

  onNoClick() : void{
    this.dialogRef.close();
  }

}
