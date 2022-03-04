import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  counter = 0;
  add() {
    this.counter++;
  }
  constructor() {}

  ngOnInit() {}
}
