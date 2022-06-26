import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order/order.service';
import { devices, deviceWidth, deviceLength, deviceHeight, coolingChamberModels, airChamberModels, recuperators } from '../../metadata/metadata'
@Component({
  selector: 'app-create-work-order-dialog',
  templateUrl: './create-work-order-dialog.component.html',
  styleUrls: ['./create-work-order-dialog.component.css']
})
export class CreateWorkOrderDialogComponent implements OnInit {

  form: FormGroup

  readonly devices = devices
  readonly deviceWidth = deviceWidth
  readonly deviceLength = deviceLength
  readonly deviceHeight = deviceHeight
  readonly coolingChamberModels = coolingChamberModels
  readonly airChamberModels = airChamberModels
  readonly recuperators = recuperators

  constructor(
    private formBuilder: FormBuilder,
    private _order: OrderService,
    private dialogRef: MatDialogRef<CreateWorkOrderDialogComponent>
  ) {
    this.form = this.formBuilder.group({
      'companyName': ['', Validators.required],
      'companyCountry': ['', Validators.required],
      'companyCity': ['', Validators.required],
      'companyAddress': ['', Validators.required],
      'device': ['', Validators.required],
      'width': ['1.2'],
      'height': ['2.1'],
      'length': ['1.2'],
      'model': ['zero'],
      'type': ['K1'],
      'fans': [1],
      'filters': [0],
      'coolers': [0],
      'heaters': [0],
      'moisturizer': [false],
      'recuperator': [''],
      'mufflers': [0]
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
        type: 'work-order',
        device: this.form.controls['device'].value,
        width: this.form.controls['device'].value === 'air-chamber' ? null : this.form.controls['width'].value,
        height: this.form.controls['device'].value === 'air-chamber' ? null : this.form.controls['height'].value,
        length: this.form.controls['device'].value === 'air-chamber' ? null : this.form.controls['length'].value,
        model: this.form.controls['device'].value === 'air-chamber' ? this.form.controls['type'].value : this.form.controls['model'].value,
        fans: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['fans'].value,
        filters: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['filters'].value,
        coolers: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['coolers'].value,
        heaters: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['heaters'].value,
        moisturizer: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['moisturizer'].value,
        recuperator: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['recuperator'].value,
        mufflers: this.form.controls['device'].value !== 'air-chamber' ? null : this.form.controls['mufflers'].value,
      }
      this._order.createOrder(data).subscribe(res => {
        if(res.success) {
          this.dialogRef.close({ msg: 'updated' })
        }
      })
    }
  }
}
