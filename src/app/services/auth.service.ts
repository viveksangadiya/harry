import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string | null | undefined, password: string | null | undefined) {
    if (email === "vivek@gmail.com" && password === "123") {
      return 200;
    }
    else
      return 403;
  }


}
