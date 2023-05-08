import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from '../../Education';
import { EDUCATION } from '../../mock-education';
import { faPenToSquare, faXmarkCircle, faTrashCan } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit{

  @Input() education : Education = EDUCATION[0]

  @Output() onDeleteEducation : EventEmitter <Education> = new EventEmitter

  @Output() onEditEducation : EventEmitter <Education> = new EventEmitter

  faPenToSquare = faPenToSquare ;
  faXmarkCircle = faXmarkCircle;
  faTrashCan = faTrashCan;
  displayEditForm : boolean = false;


  constructor(  ){

  }

  ngOnInit() : void {
  }

  onDelete(education : Education) {

    this.onDeleteEducation.emit(education);
  }

  onEditedEducation(education : Education){
    this.onEditEducation.emit(education)
  }

  toggleDisplayEditForm(): void {
    this.displayEditForm = !this.displayEditForm;    
  }
}
