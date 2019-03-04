import {Component, Input, OnInit} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notificationArray: any = [];

  vehicleDetails: any[];

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.filterPendingStatus();
  }

  onClickNotificationClose(notification, i, event) {

    event.stopPropagation();
    this.notificationArray.splice(i, 1);

  }

  onClickNotificationAccept(i) {
    console.log(i);
  }

  onClickNotificationIgnore(i) {
    console.log(i);
  }

  getVehicleDetails() {
    this.db.list('/vehicle-details').valueChanges().subscribe(
      items => {
        this.vehicleDetails = items;
        // console.log(this.vehicleDetails);
      }
    );
  }

  updateVehicleDetails(status, i) {
    this.db.object('/vehicle-details/' + i).update({status: status}).catch(error => console.log(error));
    ;
  }

  // clickAccept(i) {
  //   this.updateVehicleDetails('Accept', i);
  // }
  //
  // clickIgnore(i) {
  //   this.updateVehicleDetails('Ignore', i);
  // }

  filterPendingStatus(): any {
    return this.db.list('/vehicle-details/', ref => ref.orderByChild('status').equalTo('Pending')).valueChanges().subscribe(
      item => {
        this.notificationArray = item;
        // console.log(item);
      }
    );
  }

}
