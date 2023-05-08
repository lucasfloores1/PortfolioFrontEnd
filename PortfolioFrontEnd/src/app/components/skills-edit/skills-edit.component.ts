import { Component, OnInit, Inject } from '@angular/core';
import { Skills } from 'src/app/Skills';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

//para el select
interface Color {
  value : string;
  viewValue : string;
}

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  private updatedSkills : Skills;

  colors : Color[] = [
    { value:'accent', viewValue: 'Accent' },
    { value:'primary', viewValue: 'Primary' },
    { value:'warn', viewValue: 'Warn' },
  ]

  valueSkill : number  = this.data.value;
  colorSkill : string = this.data.color;
  nameSkill : string = this.data.name;
  
  modeSpinner : ProgressSpinnerMode = 'determinate';

  constructor(public dialogRef: MatDialogRef<SkillsEditComponent>,  @Inject(MAT_DIALOG_DATA) public data: Skills
  ){
    this.updatedSkills = data;
  } 
  
  ngOnInit(): void {
    
  }

  onNoClick() : void{
    this.dialogRef.close();
  }

  closeDialog(){
    this.data.color = this.colorSkill
    this.data.value = this.valueSkill
    this.data.name = this.nameSkill

    this.dialogRef.close(this.data)

  }
}