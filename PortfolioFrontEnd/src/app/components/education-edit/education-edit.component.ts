import { Component, OnInit, Inject } from '@angular/core';
import { Education } from 'src/app/Education';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit{

  private updatedEducation : Education;

  institute : string = this.data.institute;
  title : string = this.data.title;
  time : string = this.data.time;
  
  constructor( public dialogRef : MatDialogRef<EducationEditComponent>, @Inject(MAT_DIALOG_DATA) public data : Education ){

    this.updatedEducation = data

  }

  ngOnInit(): void {
  }

  onNoClick() : void{
    this.dialogRef.close();
  }

  closeDialog(){
    this.data.institute = this.institute
    this.data.title = this.title
    this.data.time = this.time

    this.dialogRef.close(this.data)
  }

}
