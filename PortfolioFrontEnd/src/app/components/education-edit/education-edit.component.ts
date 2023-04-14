import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/Education';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-education-edit',
  templateUrl: './education-edit.component.html',
  styleUrls: ['./education-edit.component.css']
})
export class EducationEditComponent implements OnInit{

  @Input() educationimg : string = "";
  @Input() educationid : number | undefined = 0 ;

  @Output() onEditedEducation : EventEmitter<Education> = new EventEmitter();
  
  institute : string = "";
  title : string = "";
  time : string = "";

  showEditEducation : boolean = false;
  subscription?: Subscription;
  
  constructor( private uiService : UiService ){

    this.subscription = this.uiService.onToggleEdit().subscribe(value => this.showEditEducation = value)

  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.institute.length == 0 || this.title.length == 0 || this.time.length == 0){
      alert("Debe rellenar todos los campos");
      return
    }

    const editedEducation = {
      id: this.educationid,
      img_url: this.educationimg,
      institute : this.institute,
      title: this.title,
      time: this.time,
    }

    this.onEditedEducation.emit(editedEducation)
  }

}
