import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private auth: AuthService, private router: Router) { }

  signIn = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl('')
    }
  )
  errorMsg = "";

  onSubmitData() {
    if (this.signIn.get('email')?.value?.length === 0) {
      this.errorMsg = "email is required";
    } else if (this.signIn.get('password')?.value?.length === 0) {
      this.errorMsg = "password is required";
    }
    else {
      this.errorMsg = "";
      let res = this.auth.login(this.signIn.get('email')?.value, this.signIn.get('password')?.value);
      if (res === 200) {
        this.router.navigate(['home'])
      }
      else {
        this.errorMsg = "not found";
      }
    }
  }
}
