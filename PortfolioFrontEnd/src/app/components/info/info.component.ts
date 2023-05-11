import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Info } from '../../Info';
import { InfoService } from 'src/app/services/info.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  information : Info[] = []

  constructor( public dialog : MatDialog ,private infoService : InfoService , private cdr: ChangeDetectorRef){ 
    
  }

  ngOnInit () : void{
    this.infoService.getInfo().subscribe((response) => {
      this.information = response;
      this.cdr.detectChanges();
    })
  }


}