import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../services/toastMsg.service";

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(public router: Router, private ds: DataService) {
  }

  ngOnInit() {
  }

  logout() {
    sessionStorage.setItem('login', 'false');
    this.ds.sendMsg({msg: '', msgView: false, errorMsg: false});
    this.router.navigate(['login']);
  }

}
