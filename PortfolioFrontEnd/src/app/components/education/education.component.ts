import { Component, OnInit } from '@angular/core';
import { Education } from '../../Education';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educations : Education[]

  constructor(private dataService : DataService){
    this.educations = []
  }

  ngOnInit() : void {

    this.dataService
    .getEducation()
    .subscribe((educations) => this.educations = educations)
  }
}
