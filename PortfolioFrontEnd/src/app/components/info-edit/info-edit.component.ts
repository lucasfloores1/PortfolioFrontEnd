import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/User';

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.css']
})
export class InfoEditComponent {
  
  constructor ( public dialogRef: MatDialogRef<InfoEditComponent>,  @Inject(MAT_DIALOG_DATA) public data: User ){

  }

  onNoClick() : void{
    this.dialogRef.close();
  }


}
