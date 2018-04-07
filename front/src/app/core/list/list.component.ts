import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {



  working = 'Спб, Новочеркаский 1';
  points: any = ['Краснодар', 'Новосибирск', 'Орск'];

  resultFound = true;

}
