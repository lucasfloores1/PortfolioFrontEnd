import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  showEdit : boolean = false

  constructor( private login_snackbar : MatSnackBar, public authService : AuthorizationService ,public dialog : MatDialog ){

  }

  ngOnInit() {

    this.authService.getIsLoggedInSubject().subscribe( response => {
      this.showEdit = response
    } )

  }

  logOut() {
    this.authService.logout();
    this.login_snackbar.open("Sesión Cerrada con éxito!!!","X",{ duration: 4000 })
    console.log(this.showEdit)
  }


  goToLogin():void {

    const dialogRef = this.dialog.open(LoginComponent,{

      width: '600px',
      height: '480px',
      disableClose : true,
      enterAnimationDuration : 350,

    });

  }

}
