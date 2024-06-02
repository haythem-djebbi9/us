import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommandeService } from 'src/app/services/commande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackText: string = '';
  userId!: string;
  feedbacks: any[] = [];

  constructor(
    private authService: AuthService,
    private commandeService: CommandeService
  ) { }

  ngOnInit(): void {
    const userData = this.authService.getAdminDataFromToken();
    if (userData) {
      this.userId = userData._id;
    } else {
      console.error('User not authenticated');
    }

    this.commandeService.getall().subscribe((data: any[]) => {
      this.feedbacks = data;
    }, (error) => {
      console.error('Erreur lors de la récupération des feedbacks :', error);
    });
  }

  submitFeedback(): void {
    if (this.userId && this.feedbackText) {
      console.log('Feedback:', this.feedbackText);
      this.commandeService.submitFeedback(this.userId, this.feedbackText).subscribe(
        response => {
          Swal.fire('Succès', 'Votre feedback a été envoyé avec succès', 'success');
          this.feedbackText = '';  // Clear the feedback text after successful submission
          this.ngOnInit();  // Refresh feedbacks after submitting new feedback
        },
        error => {
          Swal.fire('Erreur', 'Erreur lors de l\'envoi du feedback', 'error');
        }
      );
    } else {
      Swal.fire('Erreur', 'Utilisateur non défini ou feedback vide', 'error');
    }
  }
}
