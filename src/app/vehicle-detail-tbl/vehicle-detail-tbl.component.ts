import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs";

@Component({
  selector: "app-vehicle-detail-tbl",
  templateUrl: "./vehicle-detail-tbl.component.html",
  styleUrls: ["./vehicle-detail-tbl.component.css"]
})
export class VehicleDetailTBLComponent implements OnInit {
  vehicleDetails: any[];
  viewFullTable: boolean = false;
  key: string = "";
  index: string = "";

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.getVehicleDetails();
  }

  getVehicleDetails() {
    this.db
      .list("/vehicle-details")
      .valueChanges()
      .subscribe(items => {
        this.vehicleDetails = items;
        this.viewFullTable = true;
        //console.log(this.vehicleDetails);
      });
  }

  updateVehicleDetails(status, i) {
    this.db
      .object("/vehicle-details/" + i)
      .update({ status: status })
      .catch(error => console.log(error));
    this.key = this.vehicleDetails[i].key;
    this.index = this.vehicleDetails[i].studentIndexNo;
    if (status === "Accept") {
      this.db
        .object("/Users/" + this.index + "/notifications/" + this.key)
        .update({ status: "confirmed" });
    } else if (status === "Ignore") {
      this.db
        .object("/Users/" + this.index + "/notifications/" + this.key)
        .update({
          status: "rejected"
        });
    }
  }

  clickAccept(i) {
    this.updateVehicleDetails("Accept", i);
  }

  clickIgnore(i) {
    this.updateVehicleDetails("Ignore", i);
  }

  filterPendingStatus(): any {
    return this.db
      .list("/vehicle-details/", ref =>
        ref.orderByChild("status").equalTo("Pending")
      )
      .valueChanges()
      .subscribe(item => {
        //console.log(item);
      });
  }
}
