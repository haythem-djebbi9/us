import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import { CommandeService } from 'src/app/services/commande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  product: any;
  userId!: string;
  quantite: number = 1; // Initialiser la quantité à 1 par défaut

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitserviceService,
    private authService: AuthService,
    private commandeService: CommandeService
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
    this.produitService.getbyid(id).subscribe(data => {
      this.product = data;
    });
  }

  passerCommande(): void {
    if (this.userId && this.product) {
      const produits = [{ produit: this.product._id, quantite: this.quantite }]; // Utiliser la quantité sélectionnée
      console.log('Produits commandés:', produits); // Vérifiez ce qui est envoyé
      this.commandeService.passerCommande(this.userId, produits).subscribe(
        response => {
          Swal.fire('Succès', 'Votre commande a été passée avec succès', 'success');
        },
        error => {
          Swal.fire('Erreur', 'Erreur lors de la passation de la commande', 'error');
        }
      );
    } else {
      Swal.fire('Erreur', 'Produit ou utilisateur non défini', 'error');
    }
  }
}
