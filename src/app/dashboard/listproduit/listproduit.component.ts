import { Component, OnInit } from '@angular/core';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

interface Produit {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  prix: number;
  categorie: {
    name: string;
  };
  isFavori?: boolean;
  isDansPanier?: boolean;
}

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
  produit: Produit[] = [];
  userId!: string;

  constructor(private produitService: ProduitserviceService, private authService: AuthService) { }

  ngOnInit(): void {
    const userData = this.authService.getAdminDataFromToken();
    if (userData) {
      this.userId = userData._id;
      this.fetchProduits();
    } else {
      console.error('User not authenticated');
    }
  }

  fetchProduits(): void {
    this.produitService.getallproduit().subscribe(
      (res: Produit[]) => {
        this.produit = res;
        this.produit.forEach(item => {
          this.checkFavori(item);
          this.checkDansPanier(item);
        });
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }

  checkFavori(item: Produit): void {
    this.produitService.isFavori(this.userId, item._id).subscribe(
      (isFavori: boolean) => {
        item.isFavori = isFavori;
      },
      (error: any) => {
        console.error('Erreur lors de la vérification des favoris', error);
      }
    );
  }

  checkDansPanier(item: Produit): void {
    this.produitService.isDansPanier(this.userId, item._id).subscribe(
      (isDansPanier: boolean) => {
        item.isDansPanier = isDansPanier;
      },
      (error: any) => {
        console.error('Erreur lors de la vérification du panier', error);
      }
    );
  }

  toggleFavori(item: Produit): void {
    if (item.isFavori) {
      this.produitService.removeFavori(this.userId, item._id).subscribe(
        () => {
          item.isFavori = false;
          Swal.fire('Succès', 'Produit retiré des favoris', 'success');
        },
        (error: any) => {
          Swal.fire('Erreur', 'Erreur lors de la suppression du favori', 'error');
        }
      );
    } else {
      this.produitService.favoir(this.userId, item._id).subscribe(
        () => {
          item.isFavori = true;
          Swal.fire('Succès', 'Produit ajouté aux favoris', 'success');
        },
        (error: any) => {
          Swal.fire('Erreur', 'Erreur lors de l\'ajout aux favoris', 'error');
        }
      );
    }
  }

  togglePanier(item: Produit): void {
    if (item.isDansPanier) {
      this.produitService.retirerDuPanier(this.userId, item._id).subscribe(
        () => {
          item.isDansPanier = false;
          Swal.fire('Succès', 'Produit retiré du panier', 'success');
        },
        (error: any) => {
          Swal.fire('Erreur', 'Erreur lors de la suppression du produit du panier', 'error');
        }
      );
    } else {
      this.produitService.ajouterAuPanier(this.userId, item._id).subscribe(
        () => {
          item.isDansPanier = true;
          Swal.fire('Succès', 'Produit ajouté au panier', 'success');
        },
        (error: any) => {
          Swal.fire('Erreur', 'Erreur lors de l\'ajout du produit au panier', 'error');
        }
      );
    }
  }
}
