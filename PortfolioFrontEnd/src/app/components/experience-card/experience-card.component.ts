import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceEditComponent } from '../experience-edit/experience-edit.component';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent  implements OnInit{
 
  @Output() updatedExperience : EventEmitter<Experience> = new EventEmitter

  @Output() onDeleteExperience : EventEmitter<Experience> = new EventEmitter
  
  @Input() experience : Experience =  { id : 0, imgurl: '', name: '', company: '', time: '' };

  updatingExperience : Experience

  constructor( public dialog : MatDialog ){

  }

  ngOnInit(): void {
    
  }

  onDelete(experience : Experience): void {
    this.onDeleteExperience.emit (experience)
  }

  openDialog(){

    this.updatingExperience = this.experience
    const dialogRef = this.dialog.open( ExperienceEditComponent, {

      width: '1000px',
      data : this.updatingExperience,
      height : '600px',
      disableClose : true,
      enterAnimationDuration : 350,

    } )

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.updatedExperience.emit(result)
      }
    });

  }



  

}
