import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListproduitComponent } from './dashboard/listproduit/listproduit.component';
import { DetailproduitComponent } from './dashboard/detailproduit/detailproduit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { ListcouleurComponent } from './dashboard/listcouleur/listcouleur.component';
import { DetailcouleurComponent } from './dashboard/detailcouleur/detailcouleur.component';
import { HistoriquecommandeComponent } from './dashboard/historiquecommande/historiquecommande.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: 'listproduit', component: ListproduitComponent },
      { path: 'product/:id', component: DetailproduitComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'couleur', component: ListcouleurComponent },

      { path: 'detailcouleur/:id', component: DetailcouleurComponent },

      { path: 'historiquecommande', component: HistoriquecommandeComponent },


      // Ajoutez d'autres routes enfants ici si nécessaire
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
