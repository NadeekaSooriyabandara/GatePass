import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { DataService } from "../services/toastMsg.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-data-form",
  templateUrl: "./vehicle-data-form.component.html",
  styleUrls: ["./vehicle-data-form.component.css"]
})
export class VehicleDataFormComponent implements OnInit {
  vehicleNo: string = "";
  vehicleType: string = "";
  numberOfSeats: number = 0;
  airCondition: string = "No";
  vehicleTag: string = "";

  vehicletype: string = "";
  ac: string = "";
  seats: string = "";
  bus: string = "";
  busacorvan: string = "";
  busnonacorvan: string = "";
  vehicle: string = "";
  image: string =
    "https://firebasestorage.googleapis.com/v0/b/vehiclerequest-de1e4.appspot.com/o/Vehicles%2FBGF2314?alt=media&token=16494c36-c972-43d0-8c7b-32447ee32632";

  constructor(
    private db: AngularFireDatabase,
    private ds: DataService,
    public router: Router
  ) {}

  ngOnInit() {}

  saveVehicle() {
    this.db.object("/Vehicles/" + this.vehicleNo).set({
      vehicletype: this.vehicletype,
      ac: this.ac,
      seats: this.numberOfSeats.toString(),
      bus: this.bus,
      busacorvan: this.busacorvan,
      busnonacorvan: this.busnonacorvan,
      vehicle: this.vehicle,
      vehicleNo: this.vehicleNo.toUpperCase(),
      image: this.image
    });
    this.db.object("/tags/" + this.vehicleTag).set({
      vehicleNo: this.vehicleNo.toUpperCase()
    });
    this.db
      .object("/vehicles/" + this.vehicleNo)
      .set({
        ac: this.airCondition,
        seats: this.numberOfSeats.toString(),
        vehicle_no: this.vehicleNo.toUpperCase(),
        vehicle_type:
          this.vehicleType.charAt(0).toUpperCase() + this.vehicleType.slice(1),
        vehicleTag: this.vehicleTag
      })
      .then(
        item => {
          this.ds.sendMsg({
            msg: "New Vehicle Added Successfully",
            msgView: true,
            errorMsg: false
          });
          this.router.navigate(["vehicleDataTbl"]);
          //console.log("Success");
        },
        msg => {
          //console.log(msg);
          this.ds.sendMsg({
            msg: "Error ! Please Try Again",
            msgView: true,
            errorMsg: true
          });
        }
      );
  }

  clickSave() {
    if (
      this.vehicleNo == "" &&
      this.vehicleType == "" &&
      this.numberOfSeats == 0
    ) {
      this.ds.sendMsg({
        msg: "Please Fill All The Fields In The Form",
        msgView: true,
        errorMsg: true
      });
    } else {
      console.log(this.vehicleType + " " + this.airCondition);
      if (
        (this.vehicleType === "bus" || this.vehicleType === "Bus") &&
        this.airCondition === "Yes"
      ) {
        this.vehicletype = "busac";
        this.bus = "yes";
        this.busacorvan = "yes";
        this.busnonacorvan = "no";
        this.vehicle = "bus";
      } else if (
        (this.vehicleType === "bus" || this.vehicleType === "Bus") &&
        this.airCondition === "No"
      ) {
        this.vehicletype = "busnonac";
        this.bus = "yes";
        this.busacorvan = "no";
        this.busnonacorvan = "yes";
        this.vehicle = "bus";
      } else if (
        (this.vehicleType === "van" || this.vehicleType == "Van") &&
        this.airCondition === "Yes"
      ) {
        this.vehicletype = "van";
        this.bus = "no";
        this.busacorvan = "yes";
        this.busnonacorvan = "yes";
        this.vehicle = "van";
      } else if (
        (this.vehicleType === "van" || this.vehicleType == "Van") &&
        this.airCondition === "No"
      ) {
        this.vehicletype = "van";
        this.bus = "no";
        this.busacorvan = "yes";
        this.busnonacorvan = "yes";
        this.vehicle = "van";
      }
      if (this.airCondition == "Yes") {
        this.ac = "AC";
      } else if (this.airCondition == "No") {
        this.ac = "NONAC";
      }
      this.saveVehicle();
    }
  }

  clickRadioBtn() {
    if (this.airCondition == "Yes") {
      this.airCondition = "No";
    } else {
      this.airCondition = "Yes";
    }
  }
}
