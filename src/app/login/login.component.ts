import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../services/authService";
import {User} from "./user.interface";
import {DataService} from "../services/toastMsg.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() goMenu = new EventEmitter();

  toggleView: boolean = false;

  newPass: string = '';
  newEmail: string = '';

  email: string = '';
  password: string = '';

  errorMessage: string = '';
  successMessage: string = '';

  pageTitle: string = "Login";

  emailPattern: any = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  passwordPattern: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\\@]{8,}$/;

  constructor(private  authService: AuthService, private ds: DataService, public router: Router) {
  }

  ngOnInit() {
  }

  clickButton() {
    if (this.pageTitle == 'Login') {
      this.pageTitle = "Sign In";
    } else {
      this.pageTitle = 'Login'
    }

    this.toggleView = !this.toggleView;
  }

  createClick() {

    if (this.getErrorMsg(this.newEmail, this.newPass)) {
      this.authService.signUpUser({email: this.newEmail, password: this.newPass})
        .then(res => {
          this.errorMessage = "";
          this.successMessage = "Your account has successfully been created";
          this.ds.sendMsg({msg: this.successMessage, msgView: true, errorMsg: false});
          this.toggleView = !this.toggleView;
          this.pageTitle = "Login";
          this.newEmail = '';
          this.newPass = '';
        }, err => {
          this.errorMessage = err.message;
          this.ds.sendMsg({msg: this.errorMessage, msgView: true, errorMsg: true});
          this.successMessage = "";
        })
    }

    this.ds.sendMsg({msg: this.errorMessage, msgView: true, errorMsg: true});

  }

  getErrorMsg(email, password, login?: any): boolean {

    if (!email && !password) {
      this.errorMessage = "Please enter your password & email address";
      return false;
    } else {
      if (!email) {
        this.errorMessage = "Please enter your email address";
        return false;
      }

      if (!password) {
        this.errorMessage = "Please enter your password";
        return false;
      }
    }

    if (!login) {
      if (!this.emailPattern.test(email)) {
        this.errorMessage = "Email should be correct format";
        return false;
      }

      if (!this.passwordPattern.test(password)) {
        this.errorMessage = "Password must be at least 8 characters including a number an uppercase letter";
        return false;
      }
    }

    return true;
  }

  loginClick() {

    if (this.getErrorMsg(this.email, this.password, true)) {
      this.authService.loginUser({email: this.email, password: this.password})
        .then(res => {
          sessionStorage.setItem('login', 'true');
          this.errorMessage = "";
          this.successMessage = "Login successful";
          this.ds.sendMsg({msg: this.successMessage, msgView: true, errorMsg: false});
          this.router.navigate(['menu']);
        }, err => {
          this.errorMessage = err.message;
          this.ds.sendMsg({msg: this.errorMessage, msgView: true, errorMsg: true});
          this.successMessage = "";
        })
    }

    this.ds.sendMsg({msg: this.errorMessage, msgView: true, errorMsg: true});

  }

  loginEnterBtn(event) {
    if (event.keyCode == 13) {
      this.loginClick();
    }
  }

  createEnterBtn(event) {
    if (event.keyCode == 13) {
      this.createClick();
    }
  }

}
