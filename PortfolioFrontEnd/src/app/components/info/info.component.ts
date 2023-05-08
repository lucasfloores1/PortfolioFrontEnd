import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Info } from '../../Info';
import { InfoService } from 'src/app/services/info.service';
import { faPenToSquare, faXmarkCircle} from '@fortawesome/free-regular-svg-icons';
import { info } from 'ngx-bootstrap-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  information : Info[] = []

  faPenToSquare = faPenToSquare ;
  faXmarkCircle = faXmarkCircle;
  displayEditForm : boolean = false;

  constructor(private infoService : InfoService , private cdr: ChangeDetectorRef){ 
    
  }

  ngOnInit () : void{
    this.infoService.getInfo().subscribe((response) => {
      this.information = response;
      this.cdr.detectChanges();
    })
  }

  toggleDisplayEditForm(): void {
    this.displayEditForm = !this.displayEditForm;    
  }
}