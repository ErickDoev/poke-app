import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
