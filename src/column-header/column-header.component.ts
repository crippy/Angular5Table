import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../interfaces';

@Component({
  selector: 'robinsons-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['./column-header.component.scss']
})

export class ColumnHeaderComponent implements OnInit {
  @Input('data') data: Field;

  ngOnInit() {
    console.log(this.data);
  }

}
