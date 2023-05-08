import { Component, Output, EventEmitter} from '@angular/core';
import { Project } from 'src/app/Project';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent {

  @Output() onCreateProject : EventEmitter<Project> = new EventEmitter

  id: number  ;
  name: string ;
  description: string ;
  
  constructor() {

    this.id = 0 ;
    this.name = "";
    this.description = "";

  }
  
  
  ngOnInit(): void {
    
  }

  onSubmit(): void {

    if (this.description.length == 0 || this.name.length == 0){
      alert("Debe rellenar todos los campos");
      return
    }


    const newProject : Project ={

      id : this.id ,
      name : this.name,
      description : this.description,

    }

    this.onCreateProject.emit(newProject)

  }

}
