import { Component, OnInit } from '@angular/core';
import { Education } from '../../Education';
import { EducationService } from 'src/app/services/education.service';
import { faXmarkCircle, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AddEducationComponent } from '../add-education/add-education.component';



@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{


  
  educations : Education[]

  //preview de nuevo education
  private newEducation : Education ={
      id : 0,
      imgurl : '',
      institute : '',
      title : '',
      time : '',      
  }

  constructor(public dialog : MatDialog,private educationService : EducationService){

    this.educations = [];  

  }

  ngOnInit() : void {

    this.educationService.loadEducation()
    .subscribe((educations) => this.educations = educations)

  }

  deleteEducation(education : Education) {

    this.educationService.deleteEducation(education).subscribe(()=>(
      this.educations = this.educations.filter( t => t.id !== education.id )
    )) 

  }


  updateEducation(education : Education){

    this.educationService.updateEducation(education).subscribe((response)=>( this.updateEducations(response) ));

  }

  updateEducations(updatedEducation: Education): void {
    const index = this.educations.findIndex(education => education.id === updatedEducation.id);
    if (index !== -1) {
      this.educations[index] = updatedEducation;
    }
  }


  openDialog():void {

    const dialogRef = this.dialog.open( AddEducationComponent,{

      width: '1000px',
      data : this.newEducation,
      height : '650px',
      disableClose : true,
      enterAnimationDuration : 350,

    })

    dialogRef.afterClosed().subscribe( response => { 
      if (response){
      this.educationService.createEducation(response).subscribe( response => { this.educations.push(response) } )}
     })
  }

}