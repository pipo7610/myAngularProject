import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatuts: boolean ;
  constructor(private authService: AuthService ,  private router: Router) { }

  ngOnInit() {
    this.authStatuts = this.authService.isAuth;
  }
  onSignIn() {
    this.authStatuts = this.authService.isAuth;
    this.authService.signIn().then(() => {
        this.authStatuts = this.authService.isAuth;
        console.log( 'Valeur isAuth : ' + this.authStatuts);
        this.router.navigate(['appareil']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatuts = this.authService.isAuth;
    console.log( 'Valeur isAuth : ' + this.authStatuts);
  }

}
