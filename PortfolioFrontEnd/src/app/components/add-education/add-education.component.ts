import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Education } from 'src/app/Education';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit{
    

  constructor( public dialogRef: MatDialogRef<AddEducationComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : Education
   ){ }

  ngOnInit(): void {
  
  }

  onNoClick() : void {
    this.dialogRef.close()
  }

}
