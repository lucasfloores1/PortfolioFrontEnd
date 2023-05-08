import { Component } from '@angular/core';
import { faXmarkCircle, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Project } from 'src/app/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  faSquareXmark = faXmarkCircle;
  faSquarePlus = faSquarePlus;
  displayAddForm : boolean = false;
  
  projects : Project[]

  constructor ( private projectService : ProjectService ) {

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

  onDisplayAddForm(): void {
    this.displayAddForm = !this.displayAddForm
  }

  createProject(project : Project): void {

    this.displayAddForm = !this.displayAddForm
    this.projectService.createProject(project).subscribe( response =>{
      this.projects.push(response)
   })
    
  }


}
