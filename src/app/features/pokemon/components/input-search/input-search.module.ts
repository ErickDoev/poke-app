import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FiltroPipe } from 'src/app/pipes/filtro.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InputSearchComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    RouterModule
  ],
  exports: [
    InputSearchComponent
  ]
})
export class InputSearchModule { }
