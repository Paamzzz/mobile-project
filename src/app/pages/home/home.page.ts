import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router'; // Router: serviço typescript        RouterLink: HTML redireciona
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent,  RouterLink],
})

export class HomePage {
  //! Estou tendo que colocar esta lógica aqui pois o componente de logout nao foi feito
  //! ao ser concluído irei mover esta lógica para lá
  private authService = inject(AuthService); // estamos dizendo que estes componentes tem acesso ao AuthService
  private router = inject(Router);

  async logout() { // enquanto o serviço logout executa...
     await this.authService.sair(); // espera ESSE serviço executar X funçao (sair())
     this.router.navigate(['/splash']);
  }
}
