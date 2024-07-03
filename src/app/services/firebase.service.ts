import { Injectable } from '@angular/core';
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();
const getWelcomeDescriptionFn = httpsCallable(functions, 'getWelcomeDescription');

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {  
  constructor() {
  
  }

  getWelcomeDescription() {
    getWelcomeDescriptionFn().then((res) => console.log('res',res));
  }
  
}


