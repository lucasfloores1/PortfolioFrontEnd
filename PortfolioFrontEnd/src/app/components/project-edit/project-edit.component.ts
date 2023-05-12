import { Component, Inject } from '@angular/core';
import { Project } from 'src/app/Project';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExperienceEditComponent } from '../experience-edit/experience-edit.component';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent {

  private updatedProject : Project;

  name : string = this.data.name;
  description : string = this.data.description;
  link : string = this.data.link;

  constructor ( public dialogRef : MatDialogRef<ExperienceEditComponent>, @Inject(MAT_DIALOG_DATA) public data : Project ) {

    this.updatedProject = data

  }

  onNoClick() : void {
    this.dialogRef.close()
  }

  redirectToProject(url : string) : void {
    if (url){
      window.open( url, '_blank' )
    }
  }

  closeDialog(){

    this.data.name = this.updatedProject.name
    this.data.description = this.updatedProject.description
    this.data.link = this.updatedProject.link

    this.dialogRef.close(this.data)

  }



}
