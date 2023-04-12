import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from '../../Education';
import { EDUCATION } from '../../mock-education'



@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit{

  @Input() education : Education = EDUCATION[0]

  @Output() onDeleteEducation : EventEmitter <Education> = new EventEmitter
  
  constructor(){}

  ngOnInit() : void {
  }

  onDelete(education : Education) {

    this.onDeleteEducation.emit(education);

  }

}
