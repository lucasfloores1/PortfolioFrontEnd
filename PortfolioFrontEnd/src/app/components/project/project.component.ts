import { Component } from '@angular/core';
import { Project } from 'src/app/Project';
import { ProjectService } from 'src/app/services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { ProjectAddComponent } from '../project-add/project-add.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  
  projects : Project[]

  private newProject = { id: 0, name : '', description : '', link : '' }

  constructor ( public dialog : MatDialog, private projectService : ProjectService ) {

    this.projects = []

  }
  ngOnInit(): void {

    this.projectService.loadProject().subscribe( response => this.projects = response )

  }

  updateProject(project : Project) : void {
    
    this.projectService.updateProject(project).subscribe( (response) => {this.updateProjects(response)} )

  }

  updateProjects(updatedProject : Project) : void {

    const index = this.projects.findIndex(project => project.id === updatedProject.id);
    if (index !== -1) {
      this.projects[index] = updatedProject;

    }

  }

  deleteProject(project : Project) : void {

    this.projectService.deleteProject(project).subscribe( (response) => {
      this.projects = this.projects.filter( t => t.id !== project.id )
    }  )
    
  }


  createProject(project : Project): void {

    this.projectService.createProject(project).subscribe( response =>{
      this.projects.push(response)
   })
    
  }

  openDialog(){

    const dialogRef = this.dialog.open ( ProjectAddComponent , {

      width: '1000px',
      data : this.newProject,
      height : '525px',
      disableClose : true,
      enterAnimationDuration : 350,

    } )

    dialogRef.afterClosed().subscribe( response => { 
      if (response){
      this.projectService.createProject(response).subscribe( response => { this.projects.push(response) } )}
     })


  }


}
