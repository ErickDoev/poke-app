import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-bars',
  templateUrl: './statistics-bars.component.html',
  styleUrls: ['./statistics-bars.component.scss']
})
export class StatisticsBarsComponent implements OnInit {

  @Input() statName: string = '';
  @Input() statValue: number = 0;
  @Input() color: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
