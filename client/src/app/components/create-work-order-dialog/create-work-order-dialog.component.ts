import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-create-work-order-dialog',
  templateUrl: './create-work-order-dialog.component.html',
  styleUrls: ['./create-work-order-dialog.component.css']
})
export class CreateWorkOrderDialogComponent implements OnInit {

  form: FormGroup;

  devices: any[] = [
    { value: 'air-chamber', label: 'Klima komora' },
    { value: 'cooling-chamber', label: 'Rashladna komora' },
  ]

  sizes: any[] = [
    { value: '1.2', label: '1.2' },
    { value: '1.5', label: '1.5' },
    { value: '1.8', label: '1.8' },
    { value: '2.1', label: '2.1' },
    { value: '2.4', label: '2.4' },
    { value: '2.7', label: '2.7' },
    { value: '3.0', label: '3.0' },
  ]

  models: any[] = [
    { value: 'zero', label: 'Nula' },
    { value: 'minus', label: 'Minus' },
  ]

  types: any[] = [
    { value: 'K1', label: 'K1' },
    { value: 'K2-H', label: 'K2-H' },
    { value: 'K2-P', label: 'K2-P' },
    { value: 'K2-S', label: 'K2-S' },
    { value: 'K3-H', label: 'K3-H' },
    { value: 'K3-P', label: 'K3-P' },
    { value: 'K3-S', label: 'K3-S' },
    { value: 'K4-H', label: 'K4-H' },
    { value: 'K4-P', label: 'K4-P' },
    { value: 'K4-S', label: 'K4-S' },
    { value: 'K5-H', label: 'K5-H' },
    { value: 'K5-P', label: 'K5-P' },
    { value: 'K5-S', label: 'K5-S' },
    { value: 'K6-H', label: 'K6-H' },
    { value: 'K6-P', label: 'K6-P' },
    { value: 'K6-S', label: 'K6-S' },
    { value: 'K7-H', label: 'K7-H' },
    { value: 'K7-P', label: 'K7-P' },
    { value: 'K7-S', label: 'K7-S' },
    { value: 'K8-H', label: 'K8-H' },
    { value: 'K8-P', label: 'K8-P' },
    { value: 'K8-S', label: 'K8-S' },
    { value: 'K9-H', label: 'K9-H' },
    { value: 'K9-P', label: 'K9-P' },
    { value: 'K9-S', label: 'K9-S' },
    { value: 'K10-H', label: 'K10-H' },
    { value: 'K10-P', label: 'K10-P' },
    { value: 'K10-S', label: 'K10-S' },
  ]

  coolerHeater: any[] = [
    { value: '', label: 'nema' },
    { value: '2c', label: '2 hladnjaka' },
    { value: '1c1h', label: '1 hladnjak i 1 grejač' },
    { value: '2h', label: '2 grejač' },
  ]

  constructor(private formBuilder: FormBuilder, private _order: OrderService) {
    this.form = this.formBuilder.group({
      'companyName': ['', Validators.required],
      'companyCountry': ['', Validators.required],
      'companyCity': ['', Validators.required],
      'companyAddress': ['', Validators.required],
      'companyEmail': ['', [Validators.required, Validators.email]],
      'companyPhone': ['', Validators.required],
      'device': ['', Validators.required],
      'width': ['1.2'],
      'height': ['1.2'],
      'length': ['1.2'],
      'model': ['zero'],
      'type': ['K1'],
      'fans': [1],
      'filters': [0],
      'coolerHeater': [''],
      'moisturizer': [false]
    })
  }

  ngOnInit(): void {
  }

  createOrder() {
    if (this.form.valid) {
      const data = {
        companyName: this.form.controls['companyName'].value,
        companyCountry: this.form.controls['companyCountry'].value,
        companyCity: this.form.controls['companyCity'].value,
        companyAddress: this.form.controls['companyAddress'].value,
        companyEmail: this.form.controls['companyEmail'].value,
        companyPhone: this.form.controls['companyPhone'].value,
        type: 'work-order',
        device: this.form.controls['device'].value,
        width: this.form.controls['device'].value === 'air-chamber' ? null : this.form.controls['width'].value,
        height: this.form.controls['device'].value === 'air-chamber' ? null : this.form.controls['height'].value,
        length: this.form.controls['device'].value === 'air-chamber' ? null : this.form.controls['length'].value,
        model: this.form.controls['device'].value === 'air-chamber' ? this.form.controls['type'].value : this.form.controls['model'].value,
        fans: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['fans'].value,
        filters: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['filters'].value,
        coolerHeater: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['coolerHeater'].value,
        moisturizer: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['moisturizer'].value,
      }
      this._order.createOrder(data).subscribe(result => {

      })
    }
  }
}
