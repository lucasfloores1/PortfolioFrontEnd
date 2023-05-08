import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {


 
  constructor( public dialogRef: MatDialogRef<ExperienceAddComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : Experience
   ){ }

  
  
  ngOnInit(): void {
    
  }

  onNoClick() : void {
    this.dialogRef.close()
  }


}
