import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ListproduitComponent } from './dashboard/listproduit/listproduit.component';
import { ListcouleurComponent } from './dashboard/listcouleur/listcouleur.component';
import { DetailproduitComponent } from './dashboard/detailproduit/detailproduit.component';
import { DetailcouleurComponent } from './dashboard/detailcouleur/detailcouleur.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './dashboard/registre/registre.component';
import { ExampleComponent } from './dashboard/example/example.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoriquecommandeComponent } from './dashboard/historiquecommande/historiquecommande.component';
import { FavoirComponent } from './dashboard/favoir/favoir.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ListproduitComponent,
    ListcouleurComponent,
    DetailproduitComponent,
    DetailcouleurComponent,
    FeedbackComponent,
    LoginComponent,
    RegistreComponent,
    ExampleComponent,
    HistoriquecommandeComponent,
    FavoirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
        ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
