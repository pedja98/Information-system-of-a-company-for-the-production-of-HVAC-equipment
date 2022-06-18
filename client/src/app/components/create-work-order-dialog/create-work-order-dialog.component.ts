import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-work-order-dialog',
  templateUrl: './create-work-order-dialog.component.html',
  styleUrls: ['./create-work-order-dialog.component.css']
})
export class CreateWorkOrderDialogComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,) {
    this.form = this.formBuilder.group({
      'companyName': ['', Validators.required],
      'companyCountry': ['', Validators.required],
      'companyCity': ['', Validators.required],
      'companyAddress': ['', Validators.required],
      'companyEmail': ['', [Validators.required, Validators.email]],
      'companyPhone': ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  createOrder() {

  }
}
