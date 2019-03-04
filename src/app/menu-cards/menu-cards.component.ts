import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../services/toastMsg.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.css'],
})
export class MenuCardsComponent implements OnInit {

  notificationArray: any = [];

  constructor(public router: Router) {
    this.notificationArray = [{
      person: 'Dr. N.Rajapaksha',
      task: 'Trip',
      vehicleNo: 'ME-9489',
      vehicleType: 'Car'
    },
      {
        person: 'Dr. P.E.Jayasinghe',
        task: 'Field Visit',
        vehicleNo: 'KH-6487',
        vehicleType: 'Van'
      },
      {
        person: 'Dr. N.Karunarathne',
        task: 'Field Visit',
        vehicleNo: 'KH-6487',
        vehicleType: 'Bike'
      }];
  }

  ngOnInit() {
  }

  showDetailFun() {
    this.router.navigate(['vehicleDataTbl']);
  }

  addVehicleFun() {
    this.router.navigate(['vehicleDataForm']);
  }

  showAllNotificationFun() {
    this.router.navigate(['vehicleDetail']);
  }

}
