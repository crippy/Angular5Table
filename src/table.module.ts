import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableComponent } from './table.component';
import { ColumnDataComponent } from './column-data/column-data.component';
import { ColumnFilterComponent } from './column-filter/column-filter.component';
import { ColumnHeaderComponent } from './column-header/column-header.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TableComponent,
    ColumnDataComponent,
    ColumnFilterComponent,
    ColumnHeaderComponent
  ],
  exports: [
    TableComponent,
    ColumnDataComponent,
    ColumnFilterComponent,
    ColumnHeaderComponent
  ]
})

export class AllsopTableModule { }
