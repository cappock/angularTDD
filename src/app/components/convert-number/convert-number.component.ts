import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConvertnumberService } from 'src/app/services/convertnumber.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-convert-number',
  templateUrl: './convert-number.component.html',
  styleUrls: ['./convert-number.component.css']
})
export class ConvertNumberComponent implements OnInit {
  converNumberForm : FormGroup;
  convertedNumber : String = "XAWDD";

  constructor(private formBuilder: FormBuilder, private convertNumberService : ConvertnumberService) {
    this.converNumberForm = this.formBuilder.group({
      numberToConvert: [null, Validators.required ]
      });
   }

  ngOnInit(): void {

  }

  convertNumber(){
    try {
      this.convertedNumber = this.convertNumberService.getRomanNumber(this.f.numberToConvert.value);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You Cant Convert Number Greater Than 1000'
      })
    }
    console.log("number convert with succes")
  }

  get f(): any {
    return this.converNumberForm.controls;
  }

}
