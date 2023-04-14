import { Component, OnInit } from '@angular/core';
import { Education } from '../../Education';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educations : Education[]
  showAddEducation : boolean = false;
  subscription : Subscription;

  constructor(private dataService : DataService, private uiService : UiService){
    this.educations = [];
    
    this.subscription = this.uiService.onToggleAdd().subscribe(value => this.showAddEducation = value)
  }

  ngOnInit() : void {

    this.dataService
    .getEducation()
    .subscribe((educations) => this.educations = educations)
  }

  deleteEducation(education : Education) {

    this.dataService.deleteEducation(education).subscribe(()=>(
      this.educations = this.educations.filter( t => t.id !== education.id )
    )) 

  }

  addEducation(education : Education){
    this.dataService.addEducation(education).subscribe((education)=>(
      this.educations.push(education)
    ))
  }

  toggleAddEducation(){
    this.uiService.toggleAddEducation();
  }

  editEducation(education : Education){
    console.log(education)
    this.dataService.editEducation(education).subscribe((education)=>(
      this.updateEducations(education)
    ))
  }
  updateEducations(education : Education) : void {
    this.educations[education.id!-1] = education
  }
}