import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  selectedValue: string;

  currencys = [
    {value: 'british-0', viewValue: 'British Pound-£'},
    {value: 'america-1', viewValue: 'Pizza'},
    {value: 'australia-2', viewValue: 'Tacos'}
  ];
  sales_channels= [
    {value: 'call-0', viewValue: 'Call Center'},
    {value: 'call-1', viewValue: 'Call'}
  ];
  sources= [
    {value: 'previous-0', viewValue: 'Previous Customer'},
    {value: 'print-1', viewValue: 'Print Media'},
    {value: 'referral-2', viewValue: 'Referral'},
    {value: 'social-3', viewValue: 'Social Media'},
    {value: 'television-4', viewValue: 'Television'},
    {value: 'web-5', viewValue: 'Web site'},
    {value: 'mouth-6', viewValue: 'Word of Mouth'},
    {value: 'radio-7', viewValue: 'Radio'}
  ];
  function_sheets= [
    {value: 'multiple-0', viewValue: 'Multiple'},
    {value: 'multiple-1', viewValue: 'Pizza'},
    {value: 'multiple-2', viewValue: 'Tacos'}
  ];
  cancellation_policys= [
    {value: '100-0', viewValue: '100%'},
    {value: '7_dys-1', viewValue: '7 Days'}
  ];
  delivery_methods= [
    {value: 'email-0', viewValue: 'Email'},
    {value: 'post-1', viewValue: 'Post'},
    {value: 'gift-2', viewValue: 'Gift Wallet Includes Postage'}
  ];
  payment_termss= [
    {value: 'aa-0', viewValue: 'aa'},
    {value: 'bb-1', viewValue: 'bb'},
    {value: 'cc-2', viewValue: 'cc'}
  ];
  reasons= [
    {value: 'steak-0', viewValue: 'Purchase'},
    {value: 'pizza-1', viewValue: 'Race Entry'},
    {value: 'tacos-2', viewValue: 'Corporate'}
  ];
  event_managers= [
    {value: 'luxi-0', viewValue: 'Luxi'},
    {value: 'hiranya-1', viewValue: 'Hiranya'},
    {value: 'joe-2', viewValue: 'Joe'}
  ];
  commercials= [
    {value: 'steak-0', viewValue: 'British Pound-£'},
    {value: 'gf-1', viewValue: 'Pizza'},
    {value: 'hjg-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
