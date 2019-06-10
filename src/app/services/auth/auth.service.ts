import {Injectable} from '@angular/core';
import {User} from 'firebase';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;

  constructor(private router: Router, public  afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
        this.user = auth;
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    );
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  getUser(): User {
    return this.user;
  }

  logout(): void {
    localStorage.setItem('user', null);
    this.afAuth.auth.signOut();
    this.router.navigate(['/auth/login']);
  }
}
