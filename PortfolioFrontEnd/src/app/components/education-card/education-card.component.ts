import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Education } from '../../Education';
import { MatDialog } from '@angular/material/dialog';
import { EducationEditComponent } from '../education-edit/education-edit.component';
import { AuthorizationService } from 'src/app/services/authorization.service';


@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit{

  showEdit : boolean = this.authService.getIsLoggedIn()

  @Input() education : Education = { id: 0, imgurl : '', institute : '' , title : '', time : '' }

  @Output() onDeleteEducation : EventEmitter <Education> = new EventEmitter

  @Output() updatedEducation : EventEmitter <Education> = new EventEmitter

  updatingEducation : Education 

  constructor( public authService : AuthorizationService ,public dialog : MatDialog ){

  }

  ngOnInit() : void {

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )

  }

  onDelete(education : Education) {

    this.onDeleteEducation.emit(education);
  }

  openDialog(){

    this.updatingEducation = this.education
    const dialogRef = this.dialog.open( EducationEditComponent, {

      width: '1000px',
      data : this.updatingEducation,
      height : '600px',
      disableClose : true,
      enterAnimationDuration : 350,

    })

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.updatedEducation.emit(result)
      }
      });

  }
}
