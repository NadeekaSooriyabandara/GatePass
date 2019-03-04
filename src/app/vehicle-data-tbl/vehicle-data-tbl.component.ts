import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'app-vehicle-data-tbl',
  templateUrl: './vehicle-data-tbl.component.html',
  styleUrls: ['./vehicle-data-tbl.component.css']
})
export class VehicleDataTblComponent implements OnInit {


  vehicles: any[];
  viewFullTable: boolean = false;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.getVehicleDetails();
  }

  getVehicleDetails() {
    this.db.list('/vehicles').valueChanges().subscribe(
      items => {
        this.vehicles = items;
        this.viewFullTable = true;
        //console.log(this.vehicleDetails);
      }
    );
  }

  updateVehicleDetails(status, i) {
    this.db.object('/vehicles/' + i).update({status: status}).catch(error => console.log(error));
    ;
  }

  clickAccept(i) {
    this.updateVehicleDetails('Accept', i);
  }

  clickIgnore(i) {
    this.updateVehicleDetails('Ignore', i);
  }

  filterPendingStatus(): any {
    return this.db.list('/vehicles/', ref => ref.orderByChild('status').equalTo('Pending')).valueChanges().subscribe(
      item => {
        //console.log(item);
      }
    );
  }

}
