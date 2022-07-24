import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialService } from 'src/app/services/material/material.service';
import {
  endsWithwhitespaceValidator,
  startsWithwhitespaceValidator,
  whitespaceValidator,
} from 'src/app/validators/whitespace.validator';

@Component({
  selector: 'app-add-material-dialog',
  templateUrl: './add-material-dialog.component.html',
  styleUrls: ['./add-material-dialog.component.css'],
})
export class AddMaterialDialogComponent implements OnInit {
  form: FormGroup;
  resMsg: string = '';
  constructor(
    private formBuilder: FormBuilder,
    private _material: MaterialService,
    private dialogRef: MatDialogRef<AddMaterialDialogComponent>
  ) {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          whitespaceValidator,
          startsWithwhitespaceValidator,
          endsWithwhitespaceValidator,
        ],
      ],
      itemNumber: [
        '',
        [
          Validators.required,
          whitespaceValidator,
          startsWithwhitespaceValidator,
          endsWithwhitespaceValidator,
        ],
      ],
      supplierCode: [
        '',
        [
          Validators.required,
          whitespaceValidator,
          startsWithwhitespaceValidator,
          endsWithwhitespaceValidator,
        ],
      ],
      supplierItemNumber: [
        '',
        [
          Validators.required,
          whitespaceValidator,
          startsWithwhitespaceValidator,
          endsWithwhitespaceValidator,
        ],
      ],
      unit: [
        '',
        [
          Validators.required,
          whitespaceValidator,
          startsWithwhitespaceValidator,
          endsWithwhitespaceValidator,
        ],
      ],
      capacity: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  onChange(): void {
    if (this.resMsg != '') {
      this.resMsg = '';
    }
  }

  addMaterial() {
    if (this.form.valid) {
      let data = {
        capacity: this.form.value['capacity'],
        itemNumber: this.form.value['itemNumber'],
        name: this.form.value['name'],
        supplierCode: this.form.value['supplierCode'],
        supplierItemNumber: this.form.value['supplierItemNumber'],
        unit: this.form.value['unit'].toLowerCase(),
      };
      this._material.createMaterial(data).subscribe((res) => {
        if (res.success) {
          this.dialogRef.close({ data: 'created' });
        } else {
          this.resMsg = 'itemNumber';
        }
      });
    }
  }
}
