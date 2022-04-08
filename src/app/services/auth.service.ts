import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fire: AngularFireAuth) {}

  async login(email: string, pass: string) {
    try {
      return await this.fire.signInWithEmailAndPassword(email,pass);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async resgiter(email: string, pass: string) {
    try {
      return await this.fire.createUserWithEmailAndPassword(email,pass);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async loginWithGoogle(email: string, pass: string) {
    try {
      return await this.fire.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getUserLogged(){
    return this.fire.authState;
  }

  logOut(){
    return this.fire.signOut();
  }

}
