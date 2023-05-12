import { Component, Inject, OnInit } from '@angular/core';
import { Skills } from 'src/app/Skills';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

interface Color {
  value : string;
  viewValue : string;
}


@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})


export class SkillsAddComponent implements OnInit{
    
  
    colors : Color[] = [
      { value:'accent', viewValue: 'Accent' },
      { value:'primary', viewValue: 'Primary' },
      { value:'warn', viewValue: 'Warn' },
    ]

    modeSpinner: ProgressSpinnerMode = 'determinate';

    constructor( public dialogRef: MatDialogRef<SkillsAddComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: Skills
      ){

    }

    ngOnInit(): void {
      
    }

    onNoClick() : void{
      this.dialogRef.close();
    }

}
