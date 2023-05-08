import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Experience } from 'src/app/Experience';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit {

  @Output() onCreateExperience : EventEmitter<Experience> = new EventEmitter

  id: number  ;
  company: string ;
  name: string ;
  time: string ;
  imgurl: string ;
  
  constructor() {

    this.id = 0 ;
    this.company = "";
    this.name = "";
    this.time = "";
    this.imgurl = "";

  }
  
  
  ngOnInit(): void {
    
  }

  onSubmit(): void {

    if (this.company.length == 0 || this.name.length == 0 || this.time.length == 0 || this.imgurl.length == 0){
      alert("Debe rellenar todos los campos");
      return
    }


    const newExperience : Experience ={

      id : this.id ,
      company : this.company,
      name : this.name,
      time : this.time,
      imgurl : this.imgurl,

    }

    this.onCreateExperience.emit(newExperience)

  }

}
