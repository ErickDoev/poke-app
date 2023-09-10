import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { InputSearchModule } from '../../pokemon/components/input-search/input-search.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    InputSearchModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
