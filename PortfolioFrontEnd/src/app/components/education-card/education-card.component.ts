import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../Education';
import { EDUCATION } from '../../mock-education'



@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit{

  @Input() education : Education = EDUCATION[0]
  
  constructor(){}

  ngOnInit() : void {
  }
}
