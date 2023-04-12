import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Education } from 'src/app/Education';


@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit{
  @Output() onAddEducation : EventEmitter<Education> = new EventEmitter();
  institute: string = "";
  title: string = "";
  time: string = "";
  img_url: string = "";

  constructor(){}

  ngOnInit(): void {
  
}

  onSubmit(){
    if (this.institute.length == 0 || this.title.length == 0 || this.time.length == 0 || this.img_url.length == 0){
      alert("Debe rellenar todos los campos");
      return
    }

    const newEducation = {
      img_url: this.img_url,
      institute : this.institute,
      title: this.title,
      time: this.time,
    }

    this.onAddEducation.emit(newEducation)
  }

}
