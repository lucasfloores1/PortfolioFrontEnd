import { Component , OnInit , Input } from '@angular/core';
import { Info } from 'src/app/Info';
import { INFO } from 'src/app/mock-info';

@Component({
  selector: 'app-info-edit',
  templateUrl: './info-edit.component.html',
  styleUrls: ['./info-edit.component.css']
})
export class InfoEditComponent implements OnInit {

  @Input() info : Info = INFO[0]

  constructor(){ }

  ngOnInit() : void {

    console.log(this.info)

  }


}
