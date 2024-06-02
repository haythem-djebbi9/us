import { Component } from '@angular/core';
import { CouleurService } from 'src/app/services/couleur.service';

@Component({
  selector: 'app-listcouleur',
  templateUrl: './listcouleur.component.html',
  styleUrls: ['./listcouleur.component.css']
})
export class ListcouleurComponent {
  constructor(private data: CouleurService) { }
  showButtons: boolean = false; // Déclaration de la propriété showButtons

  couleurs: any;

  ngOnInit(): void {
    this.data.getallcouleur().subscribe(
      res => {
        this.couleurs = res;
        
      }
    );
  }


   
}
