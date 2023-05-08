import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Experience } from 'src/app/Experience';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.css']
})
export class ExperienceEditComponent {

  @Output() onEditedExperience : EventEmitter<Experience> = new EventEmitter();
  
  @Input() experienceimgurl : string = "";
  @Input() experienceid : number = 0 ;

  name : string = '';
  company : string = '';
  time : string = '';

  onSubmit():void {

    if (this.company.length == 0 || this.name.length == 0 || this.time.length == 0){
      alert("Debe rellenar todos los campos");
      return
    }

    const editedExperience : Experience = {
      id: this.experienceid,
      imgurl: this.experienceimgurl,
      name : this.name,
      company: this.company,
      time: this.time,
    }

    this.onEditedExperience.emit(editedExperience)

  }

}
