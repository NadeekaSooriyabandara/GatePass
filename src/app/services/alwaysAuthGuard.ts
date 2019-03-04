import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

  loggedIn: boolean = false;

  constructor(public router: Router) {
  }

  canActivate(): boolean {

    this.loggedIn = this.isLoggedIn();

    if (!this.loggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  isLoggedIn(): boolean {
    return (sessionStorage.getItem('login') == 'true');
  }

}
