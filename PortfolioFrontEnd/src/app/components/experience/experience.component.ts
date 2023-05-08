import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { faXmarkCircle, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  faSquareXmark = faXmarkCircle;
  faSquarePlus = faSquarePlus;
  displayAddForm : boolean = false;
  
  experiences : Experience[]

  constructor ( private experienceService : ExperienceService ) {

    this.experiences = []

  }
  ngOnInit(): void {

    this.experienceService.loadExperience().subscribe( response => this.experiences = response )

  }

  updateExperience(experience : Experience) : void {
    
    this.experienceService.updateExperience(experience).subscribe( (response) => {this.updateExperiences(response)} )

  }

  updateExperiences(updatedExperience : Experience) : void {

    const index = this.experiences.findIndex(experience => experience.id === updatedExperience.id);
    if (index !== -1) {
      this.experiences[index] = updatedExperience;

    }

  }

  deleteExperience(experience : Experience) : void {

    this.experienceService.deleteExperience(experience).subscribe( (response) => {
      this.experiences = this.experiences.filter( t => t.id !== experience.id )
    }  )
    
  }

  onDisplayAddForm(): void {
    this.displayAddForm = !this.displayAddForm
  }

  createExperience(experience : Experience): void {

    this.displayAddForm = !this.displayAddForm
    this.experienceService.createExperience(experience).subscribe( response =>{
      this.experiences.push(response)
   })
    
  }



}
