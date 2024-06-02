import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/user/';

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  // Méthode pour mettre à jour l'état de connexion
  updateLoggedInState(isLoggedIn: boolean) {
    this.isLoggedInSubject.next(isLoggedIn);
  }

  // register(admin: any){
  //   return this.http.post(this.url + 'register' , admin);
  // }

  login(admin: any){
    return this.http.post(this.url + 'login' , admin);
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    return !!token; // Retourne true si token est présent, sinon false
  }

  getAdminDataFromToken(){
    let token = localStorage.getItem('token');
    if(token){
      let data = JSON.parse( window.atob(token.split('.')[1] ));
      return data;
    }
  }

  logout(){

    localStorage.removeItem('token');
    
    window.location.reload();
    
    }
}

