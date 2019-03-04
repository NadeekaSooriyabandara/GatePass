import { Injectable } from '@angular/core';
import { User } from "../login/user.interface";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  signUpUser(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        //console.log(error.message)
        throw error
      });
  }

  loginUser(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        //console.log(error)
        throw error
      });
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    //this.router.navigate(['/'])
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

}
