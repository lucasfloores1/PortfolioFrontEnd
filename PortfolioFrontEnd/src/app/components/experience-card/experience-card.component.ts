import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { faPenToSquare, faXmarkCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent  implements OnInit{
 
  @Output() onEditExperience : EventEmitter<Experience> = new EventEmitter

  @Output() onDeleteExperience : EventEmitter<Experience> = new EventEmitter
  
  @Input() experience : Experience =  {
    id : 0,
    imgurl: '',
    name: '',
    company: '',
    time: '',
  };

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

  onDelete(experience : Experience): void {
    this.onDeleteExperience.emit (experience)
  }

  onEditedExperience(experience : Experience) : void {
    this.onEditExperience.emit(experience)
  }



  

}
