import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  NgZone
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IMyDpOptions } from 'mydatepicker';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';


import { Filter } from '../interfaces';

@Component({
  selector: 'robinsons-table-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.scss']
})
export class ColumnFilterComponent implements OnInit {
  @Input('key') key: string = '';
  @Input('filter') filter: Filter = { type: '' };
  @Output('callback') callback = new EventEmitter<any>();
  @ViewChild('input') el: ElementRef;

  public robinsonsDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  constructor(private ngzone: NgZone) { }

  ngOnInit() {
    console.log(this.filter, ' will exist')
  }

  ngAfterViewInit() {
    const self = this;
    if (this.el) {
      this.ngzone.runOutsideAngular(() => {
        Observable.fromEvent(this.el.nativeElement, 'keyup')
          .debounceTime(300)
          .subscribe((event: any) => {
            self.callback.emit({ key: self.key, value: event.target.value, type: self.filter.type })
          });
      });
    }
  }

  change(event) {
    this.callback.emit({ key: this.key, value: event, type: this.filter.type });
  }

}
