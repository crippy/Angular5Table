"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ColumnDataComponent = class ColumnDataComponent {
    constructor() {
        this.callback = new core_1.EventEmitter();
    }
    getTypeOfData() {
        return typeof this.data;
    }
    onCallBack(event) {
        this.callback.emit({ event: event, index: this.index, key: this.key });
    }
};
__decorate([
    core_1.Input('data'),
    __metadata("design:type", Object)
], ColumnDataComponent.prototype, "data", void 0);
__decorate([
    core_1.Input('index'),
    __metadata("design:type", Number)
], ColumnDataComponent.prototype, "index", void 0);
__decorate([
    core_1.Input('key'),
    __metadata("design:type", String)
], ColumnDataComponent.prototype, "key", void 0);
__decorate([
    core_1.Input('definition'),
    __metadata("design:type", Object)
], ColumnDataComponent.prototype, "definition", void 0);
__decorate([
    core_1.Output('callback'),
    __metadata("design:type", Object)
], ColumnDataComponent.prototype, "callback", void 0);
ColumnDataComponent = __decorate([
    core_1.Component({
        selector: 'allsop-column-data',
        template: `
  <p *ngIf="definition.type === 'string'">{{data}}</p> <p *ngIf="definition.type === 'date'">{{data | date: 'dd/MM/yyyy HH:mm'}}</p> <div class="button-container" *ngIf="definition.type === 'button'"> <div class="button {{btn.class}}" *ngFor="let btn of definition.values" (click)="btn.callback($event, btn)"> <div *ngIf="btn.icon !== ''" class="icon icon-{{btn.icon}}"></div> <div class="label">{{btn.key ? data[btn.key] : btn.label}}</div> </div> </div> <div class="checkbox-container" *ngIf="definition.type === 'checkbox'"> <input type="checkbox" [checked]="data === true" [disabled]="data === -1" (change)="onCallBack($event)"> </div>
  `
    })
], ColumnDataComponent);
exports.ColumnDataComponent = ColumnDataComponent;
