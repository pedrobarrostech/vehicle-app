import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { VehicleService } from '../common/_services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.template.html',
  styleUrls: ['./vehicles.style.css']
})
export class VehiclesComponent implements OnInit {

  private vehicles = [];
  private isLoading = true;

  private vehicle = {};
  private isEditing = false;

  private addVehicleForm: FormGroup;
  private plate = new FormControl('', Validators.required);
  private image = new FormControl('', Validators.required);
  private model = new FormControl('', Validators.required);
  private fuel = new FormControl('', Validators.required);
  private brand = new FormControl('', Validators.required);
  private price = new FormControl('', Validators.required);
  private infoMsg = { body: '', type: 'info'};

  constructor(private http: Http,
              private _vehicleService: VehicleService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getVehicles();
    this.addVehicleForm = this.formBuilder.group({
      plate: this.plate,
      image: this.image,
      model: this.model,
      price: this.price,
      brand: this.brand,
      fuel: this.fuel
    });

  }

  getVehicles() {
    this._vehicleService.getAll().subscribe(
      data => this.vehicles = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addVehicle() {
    this._vehicleService.add(this.addVehicleForm.value).subscribe(
      res => {
        const newVehicle = res;
        this.vehicles.push(newVehicle);
        this.addVehicleForm.reset();
        this.sendInfoMsg('Veículo adicionado com sucesso.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(vehicle) {
    this.isEditing = true;
    this.vehicle = vehicle;
  }

  cancelEditing() {
    this.isEditing = false;
    this.vehicle = {};
    this.sendInfoMsg('Edição do veículo cancelada.', 'warning');
    this.getVehicles();
  }



  editVehicle(vehicle) {
    this._vehicleService.update(vehicle).subscribe(
      res => {
        this.isEditing = false;
        this.vehicle = vehicle;
        this.sendInfoMsg('Veículo editado com sucesso.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteVehicle(vehicle) {
    if (window.confirm('Você tem certeza que deseja deletar permanentemente esse veículo?')) {
      this._vehicleService.remove(vehicle).subscribe(
        res => {
          const pos = this.vehicles.map(item => { return item.id }).indexOf(vehicle.id);
          this.vehicles.splice(pos, 1);
          this.sendInfoMsg('Veículo deletado com sucesso.', 'success');
        },
        error => console.log(error)
      );
    }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

}
