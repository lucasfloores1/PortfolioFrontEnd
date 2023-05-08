import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Project } from 'src/app/Project';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent {

  @Output() onEditedProject : EventEmitter<Project> = new EventEmitter();
  
  @Input() projectid : number = 0 ;

  name : string = '';
  description : string = '';

  onSubmit():void {

    if (this.description.length == 0 || this.name.length == 0 ){
      alert("Debe rellenar todos los campos");
      return
    }

    const editedProject : Project = {

      id: this.projectid,
      description: this.description,
      name : this.name,

    }

    this.onEditedProject.emit(editedProject)

  }

}
