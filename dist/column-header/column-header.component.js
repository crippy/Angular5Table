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
let ColumnHeaderComponent = class ColumnHeaderComponent {
};
__decorate([
    core_1.Input('data'),
    __metadata("design:type", Object)
], ColumnHeaderComponent.prototype, "data", void 0);
ColumnHeaderComponent = __decorate([
    core_1.Component({
        selector: 'allsop-column-header',
        template: `
    <div class="title">{{data.title}}</div> <span *ngIf="data.sorting !== undefined" (click)="data.sorting.callback($event, data.key)"> <i *ngIf="data.sorting.value === -1">asc</i> <i *ngIf="data.sorting.value === 0">desc</i> <i *ngIf="data.sorting.value === 1">-</i> </span>
  `
    })
], ColumnHeaderComponent);
exports.ColumnHeaderComponent = ColumnHeaderComponent;
