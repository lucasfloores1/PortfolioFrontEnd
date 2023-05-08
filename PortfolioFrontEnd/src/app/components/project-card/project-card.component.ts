import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Project } from 'src/app/Project';
import { faPenToSquare, faXmarkCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Output() onEditProject : EventEmitter<Project> = new EventEmitter

  @Output() onDeleteProject : EventEmitter<Project> = new EventEmitter
  
  @Input() project : Project =  {
    id : 0,
    description: '',
    name: '',
  };

  @Output() 

  faPenToSquare = faPenToSquare ;
  faXmarkCircle = faXmarkCircle;
  faTrashCan = faTrashCan;
  displayEditForm : boolean = false;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  toggleDisplayEditForm(): void {
    this.displayEditForm = !this.displayEditForm;
  }

  onDelete(project : Project): void {
    this.onDeleteProject.emit (project)
  }

  onEditedProject(project : Project) : void {
    console.log(project)
    this.onEditProject.emit(project)
  }

}
