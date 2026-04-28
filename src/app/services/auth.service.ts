import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut, user, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
     providedIn: 'root',
})
export class AuthService {
     private auth = inject(Auth);

     cadastrar(email: string, senha: string) {
          return createUserWithEmailAndPassword(this.auth, email, senha);
     }

     entrar(email: string, senha: string) {
          return signInWithEmailAndPassword(this.auth, email, senha)
     }

     sair() {
          return signOut(this.auth)
     }

     usuarioAtual$ = user(this.auth);
}
