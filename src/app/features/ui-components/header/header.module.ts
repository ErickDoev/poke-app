import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { InputSearchModule } from '../../pokemon/components/input-search/input-search.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    InputSearchModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
