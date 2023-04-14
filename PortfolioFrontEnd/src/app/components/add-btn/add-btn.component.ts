import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { faXmarkCircle, faSquarePlus } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.css']
})
export class AddBtnComponent  implements OnInit{

  faSquareXmark = faXmarkCircle;
  faSquarePlus = faSquarePlus;

  showAddEducation : boolean = false;
  subscription?: Subscription;

  constructor( private uiService : UiService ){ 

    this.subscription = this.uiService.onToggleAdd().subscribe(value => this.showAddEducation = value)

   }
  
  ngOnInit(): void {
    
  }

}
