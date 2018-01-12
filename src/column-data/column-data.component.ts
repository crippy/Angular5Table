import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Definition } from '../interfaces';

@Component({
  selector: 'robinsons-column-data',
  templateUrl: './column-data.component.html',
  styleUrls: ['./column-data.component.scss']
})

export class ColumnDataComponent implements OnInit {
  @Input('data') data: any;
  @Input('index') index: number;
  @Input('key') key: string;
  @Input('definition') definition: Definition;
  @Output('callback') callback = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.data);
  }

  getTypeOfData() {
    return typeof this.data;
  }

  onCallBack(event) {
    this.callback.emit({ event: event, index: this.index, key: this.key });
  }
}
