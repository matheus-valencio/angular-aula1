import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  tabuada() {
    return [
      '5x1 = 5',
      '5x2 = 10',
      '5x3 = 15',
      '5x4 = 20',
      '5x5 = 25',
      '5x6 = 30',
      '5x7 = 35',
      '5x8 = 40',
      '5x9 = 45',
      '5x10 = 50',
    ];
  }

  constructor() {}

  ngOnInit() {}
}
