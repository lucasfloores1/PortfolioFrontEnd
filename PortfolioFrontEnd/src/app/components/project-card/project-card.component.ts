import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Project } from 'src/app/Project';
import { MatDialog } from '@angular/material/dialog';
import { ProjectEditComponent } from '../project-edit/project-edit.component';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  showEdit : boolean = this.authService.getIsLoggedIn()
  
  @Output() updatedProject : EventEmitter<Project> = new EventEmitter

  @Output() onDeleteProject : EventEmitter<Project> = new EventEmitter
  
  @Input() project : Project =  {
    id : 0,
    description: '',
    name: '',
    link: '',
  };

  private updatingProject : Project;

  constructor( public authService : AuthorizationService ,public dialog : MatDialog ){

  }

  ngOnInit(): void {

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )
    
  }


  onDelete(project : Project): void {
    this.onDeleteProject.emit (project)
  }


  openDialog(){

    this.updatingProject = this.project
    const dialogRef = this.dialog.open( ProjectEditComponent, {

      width: '1000px',
      data : this.updatingProject,
      height : '525px',
      disableClose : true,
      enterAnimationDuration : 350,

    } )

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.updatedProject.emit(result)
      }
    });

  }

  redirectToProject(project : Project) : void {
    if (project.link){
      window.open( project.link, '_blank' )
    }
  }

}
