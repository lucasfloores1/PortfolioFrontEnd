import { Component, NgModule, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Skills } from 'src/app/Skills';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { SkillsEditComponent } from '../skills-edit/skills-edit.component';
import { AuthorizationService } from 'src/app/services/authorization.service';



@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit{

  showEdit : boolean = this.authService.getIsLoggedIn()
  
  @Input() skill : Skills = {
    id: 0,
    name : '',
    value : 0,
    color : '',
  }

  @Output() updatedSkill : EventEmitter<Skills> = new EventEmitter

  @Output() deleteSkill : EventEmitter<Skills> = new EventEmitter
  
  updatingSkill : Skills 

  constructor( public authService : AuthorizationService ,public dialog: MatDialog ){

  }

  ngOnInit(): void {

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )
    
  }

  openDialog(){

    this.updatingSkill = this.skill
    const dialogRef = this.dialog.open(SkillsEditComponent,{

      width: '600px',
      data: this.updatingSkill,
      disableClose : true,
      enterAnimationDuration : 350,

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.updatedSkill.emit(result)
      }
      });
  }

  onDelete():void {
    this.deleteSkill.emit(this.skill)
  }

}
