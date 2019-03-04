import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import {msgObj} from '../msg-toast/msg.interface';

@Injectable()
export class DataService {
  private subject = new Subject<any>();

  sendMsg(messageObject: msgObj) {
    // console.log(messageObject);
    this.subject.next(messageObject);
  }

  clearMsg() {
    this.subject.next();
  }

  getMsg(): Observable<msgObj> {
    return this.subject.asObservable();
  }
}
