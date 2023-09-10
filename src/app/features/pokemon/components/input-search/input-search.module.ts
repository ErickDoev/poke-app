import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FiltroPipe } from 'src/app/pipes/filtro.pipe';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    InputSearchComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    RouterModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    InputSearchComponent
  ]
})
export class InputSearchModule { }
