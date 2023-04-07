import { Component, OnInit } from '@angular/core';
import { Info } from '../../Info';
import { InfoService } from 'src/app/services/info.service';
import { INFO } from 'src/app/mock-info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  information : Info[]

  constructor(private infoService : InfoService){ 
    this.information = []
  }

  ngOnInit () : void{

    this.infoService
    .getInfo()
    .subscribe((information) => this.information = information )

  }
}