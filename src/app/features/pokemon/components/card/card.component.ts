import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()imgUrl: string | undefined;
  @Input()name: string | undefined;
  @Input()id: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
