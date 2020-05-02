import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOption : RadioOption[] = [
    {label : 'Dinheiro', value: 'MON'},
    {label : 'Cartão Crédito', value: 'CRED'},
    {label : 'Cartão Débito', value: 'DEB'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
