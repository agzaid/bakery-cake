import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private route:ActivatedRoute) { 
    this.user$ = afAuth.authState;
  }

  googleAuth() {
   let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    return this.authLogin(new auth.GoogleAuthProvider());
  }

  authLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log('Your logged in successfully..!!');
      }).catch((error) => {
        console.log(error);
      })
  }

  logout(){
   return this.afAuth.signOut();
  }
}
