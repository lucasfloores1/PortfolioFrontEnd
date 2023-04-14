import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { faPenToSquare, faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css']
})
export class EditBtnComponent implements OnInit{

  faPenToSquare = faPenToSquare ;
  faXmarkCircle = faXmarkCircle;

  showEditEducation : boolean = false;
  subscription?: Subscription;
  
  constructor(private uiService : UiService){

    this.subscription = this.uiService.onToggleEdit().subscribe(value => this.showEditEducation = value)

  }

    ngOnInit(): void {
    
  }

}
