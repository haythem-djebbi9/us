import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  admin:any;

 

  constructor(private _auth: AuthService) {}

  
  ngOnInit() {
    // this._auth.isLoggedIn$.subscribe((isLoggedIn) => {
    //   this.isLoggedIn = isLoggedIn;
    // });
    this.admin=this._auth.getAdminDataFromToken();
  }
 
  logout(){
    this._auth.logout();
  }
  
}