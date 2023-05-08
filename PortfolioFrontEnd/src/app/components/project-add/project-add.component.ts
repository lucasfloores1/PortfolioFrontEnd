import { Component, Inject } from '@angular/core';
import { Project } from 'src/app/Project';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {

  
  constructor( public dialogRef: MatDialogRef<ProjectAddComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : Project ) {

  }
  
  
  ngOnInit(): void {
    
  }

  onNoClick() : void {
    this.dialogRef.close()
  }

  redirectToProject(url : string) : void {
    if (url){
      window.open( url, '_blank' )
    }
  }

}
