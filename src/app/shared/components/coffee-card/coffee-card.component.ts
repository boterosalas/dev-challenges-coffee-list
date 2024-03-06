import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss'],
})
export class CoffeeCardComponent implements OnInit {

  @Input() card: any = {};

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.card);
  }
}
