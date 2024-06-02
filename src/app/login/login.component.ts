import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
    
    
    
    
      constructor(private _auth:AuthService,private router:Router) { }
    
      ngOnInit(): void {
      }
    login(){
    
    this._auth.login(this.user)
    .subscribe({
    next:(res)=>{
      let token : any=res;
      localStorage.setItem('token',token.mytoken);
    
    this.router.navigate(['/dashboard'])
    
    
    },
    error:(err)=>{
      console.log(err);
      
    }
    
    
    
    })
    
    
    }
    }
    