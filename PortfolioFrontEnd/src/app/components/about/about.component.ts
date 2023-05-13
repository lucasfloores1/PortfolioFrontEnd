import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutEditComponent } from '../about-edit/about-edit.component';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit{

  showEdit : boolean = this.authService.getIsLoggedIn()

  user : User = { id : 0 , username:'', password : '', name : '', aboutme : '', title : '', bannerurl : '', pfpurl : '' }

  constructor( private messageSnackbar : MatSnackBar, public userService : UserService ,public authService : AuthorizationService ,public dialog : MatDialog ){

  }

  ngOnInit(  ): void {

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )

    this.userService.getUser().subscribe( response => this.user = response )
    
  }

  openDialog(){

    const dialogRef = this.dialog.open(AboutEditComponent,{

      width: '1000px',
      data: this.user,
      disableClose : true,
      enterAnimationDuration : 350,

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){ 
        this.userService.updateUser(result).subscribe( response => {
          this.user.aboutme = response.aboutme
          this.messageSnackbar.open( "Información editada con éxito!!!", "X",{ duration: 4000 } )
        })
      }
    });
  }

}
