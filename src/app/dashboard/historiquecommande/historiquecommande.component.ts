import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProduitserviceService } from 'src/app/services/produitservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historiquecommande',
  templateUrl: './historiquecommande.component.html',
  styleUrls: ['./historiquecommande.component.css']
})
export class HistoriquecommandeComponent implements OnInit {
  commandes: any[] = [];
  userId: string = '';

  constructor(
    private produitService: ProduitserviceService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const userData = this.authService.getAdminDataFromToken();
    if (userData) {
      this.userId = userData._id;
      this.getCommandesByUser(this.userId);
    } else {
      console.error('User not authenticated');
    }
  }

  getCommandesByUser(userId: string): void {
    this.produitService.getCommandesByUser(userId).subscribe(
      data => {
        this.commandes = data;
      },
      error => {
        console.error('Error fetching order history:', error);
        Swal.fire('Erreur', 'Erreur lors de la récupération de l\'historique des commandes', 'error');
      }
    );
  }

  annulerCommande(commandeId: string): void {
    this.produitService.annulerCommande(commandeId).subscribe(
      response => {
        Swal.fire('Succès', 'Commande annulée avec succès', 'success');
        this.getCommandesByUser(this.userId); // Actualiser la liste des commandes après l'annulation
      },
      error => {
        console.error('Erreur lors de l\'annulation de la commande:', error);
        Swal.fire('Erreur', 'Une erreur s\'est produite lors de l\'annulation de la commande', 'error');
      }
    );
  }
}
