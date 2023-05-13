import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from 'src/app/User';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.css']
})
export class AboutEditComponent implements  OnInit{

  constructor ( public dialogRef: MatDialogRef<AboutEditComponent>,  @Inject(MAT_DIALOG_DATA) public data: User ){

  }

  ngOnInit(): void {
    
  }

  onNoClick() : void{
    this.dialogRef.close();
  }


}
