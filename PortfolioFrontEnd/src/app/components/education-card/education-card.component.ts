import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from '../../Education';
import { EDUCATION } from '../../mock-education';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit{

  @Input() education : Education = EDUCATION[0]

  @Output() onDeleteEducation : EventEmitter <Education> = new EventEmitter

  @Output() onEditEducation : EventEmitter <Education> = new EventEmitter

  showEditEducation : boolean = false;
  subscription?: Subscription;

  constructor( private uiService : UiService ){

    this.subscription = this.uiService.onToggleEdit().subscribe(value => this.showEditEducation = value)

  }

  ngOnInit() : void {
  }

  onDelete(education : Education) {

    this.onDeleteEducation.emit(education);
  }

  onEditedEducation(education : Education){
    this.onEditEducation.emit(education)
  }

  toggleEditEducation(){
    this.uiService.toggleEditEducation();
  }
}
