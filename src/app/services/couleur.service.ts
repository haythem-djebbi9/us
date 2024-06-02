import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouleurService {
  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:3000/';

  getallcouleur() {
    return this.http.get(this.url + 'couleur/all');
  }

  getbyid(id: string): Observable<any> {
    return this.http.get(this.url + 'couleur/getbyid/' + id);
  }




  passerCommande(userId: string, couleurs: any[]): Observable<any> {
    const url = `${this.url}commandecouleur/commandecadd`;
    return this.http.post<any>(url, { userId, couleurs });
  }
  
}
