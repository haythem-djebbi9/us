import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CouleurService } from 'src/app/services/couleur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailcouleur',
  templateUrl: './detailcouleur.component.html',
  styleUrls: ['./detailcouleur.component.css']
})
export class DetailcouleurComponent implements OnInit {
  couleur: any;
  userId!: string;
  quantite: number = 1;

  constructor(
    private route: ActivatedRoute,
    private couleurService: CouleurService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const userData = this.authService.getAdminDataFromToken();
    if (userData) {
      this.userId = userData._id;
      const productId = this.route.snapshot.paramMap.get('id');
      if (productId) {
        this.getProductDetails(productId);
      } else {
        console.error('Product ID is null');
      }
    } else {
      console.error('User not authenticated');
    }
  }

  getProductDetails(id: string): void {
    this.couleurService.getbyid(id).subscribe(
      data => {
        this.couleur = data;
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }

  passerCommande(): void {
    if (this.userId && this.couleur) {
      const couleurs = [{ couleur: this.couleur._id, quantite: this.quantite }];
      console.log('Produits commandés:', couleurs);
      this.couleurService.passerCommande(this.userId, couleurs).subscribe(
        response => {
          Swal.fire('Succès', 'Votre commande a été passée avec succès', 'success');
        },
        error => {
          Swal.fire('Erreur', 'Erreur lors de la passation de la commande', 'error');
          console.error('Error passing order:', error);
        }
      );
    } else {
      Swal.fire('Erreur', 'Produit ou utilisateur non défini', 'error');
    }
  }
}
