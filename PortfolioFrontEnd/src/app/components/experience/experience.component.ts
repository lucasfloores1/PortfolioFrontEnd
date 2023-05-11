import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceAddComponent } from '../experience-add/experience-add.component';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  showEdit : boolean = false

  experiences : Experience[]

  private newExperience : Experience = { id: 0, imgurl : '' , company : '', name : '', time : '' }

  constructor ( public authService : AuthorizationService ,public dialog : MatDialog , private experienceService : ExperienceService ) {

    this.experiences = []

  }
  ngOnInit(): void {

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )

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


  createExperience(experience : Experience): void {

    this.experienceService.createExperience(experience).subscribe( response =>{
      this.experiences.push(response)
   })
    
  }

  openDialog() : void {

    const dialogRef = this.dialog.open ( ExperienceAddComponent , {

      width: '1000px',
      data : this.newExperience,
      height : '650px',
      disableClose : true,
      enterAnimationDuration : 350,

    } )

    dialogRef.afterClosed().subscribe( response => { 
      if (response){
      this.experienceService.createExperience(response).subscribe( response => { this.experiences.push(response) } )}
     })

  }



}
