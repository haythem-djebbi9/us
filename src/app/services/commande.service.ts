import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  url = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

  passerCommande(userId: string, produits: any[]): Observable<any> {
    return this.http.post(this.url + 'commande/passer-commande', { userId, produits });
  }

 
  submitFeedback(userId: string, feedbackText: string): Observable<any> {
    const feedbackData = { userId, feedbackText };
    return this.http.post(`${this.url}feedback/add`, feedbackData);
  }

  getall(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'feedback/all');
  }
}
