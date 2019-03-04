import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../services/toastMsg.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-msg-toast',
  templateUrl: './msg-toast.component.html',
  styleUrls: ['./msg-toast.component.css']
})
export class MsgToastComponent implements OnInit, OnDestroy {

  msg: any = '';
  msgView: boolean = true;
  errorMsg: boolean = true;

  subscription: Subscription;

  constructor(private ds: DataService) {
    this.subscription = this.ds.getMsg().subscribe(msg => {
      this.msg = msg.msg;
      this.msgView = msg.msgView;
      this.errorMsg = msg.errorMsg;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
