import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {
  url = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) { }

  getallproduit(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'produit/all');
  }

  favoir(userId: string, produitId: string): Observable<any> {
    return this.http.post(this.url + 'favoir/ajouterProduit', { userId, produitId });
  }

  removeFavori(userId: string, produitId: string): Observable<any> {
    return this.http.delete(`${this.url}favoir/supprimer/${userId}/${produitId}`);
  }

  isFavori(userId: string, produitId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}favoir/isProduitFavori/${userId}/${produitId}`);
  }

  getbyid(id: string): Observable<any> {
    return this.http.get(this.url + 'produit/getbyid/' + id);
  }

  ajouterAuPanier(userId: string, produitId: string): Observable<any> {
    return this.http.post(this.url + 'panier/ajouterProduit', { userId, produitId });
  }

  retirerDuPanier(userId: string, produitId: string): Observable<any> {
    return this.http.delete(`${this.url}panier/supprimer/${userId}/${produitId}`);
  }

  isDansPanier(userId: string, produitId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}panier/isProduitDansPanier/${userId}/${produitId}`);
  }

  getCommandesByUser(userId: string): Observable<any> {
    return this.http.get(`${this.url}commande/getcommandebyuser/${userId}`);
  }


 
  annulerCommande(commandeId: string): Observable<any> {
    return this.http.delete(`${this.url}commande/commandeannuler/${commandeId}`);
  }

  
}
