import { Component, Input } from '@angular/core';
import { SlideInOutAnimations } from '../animation';
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent() {
    }
    CollapseComponent.prototype.ngOnInit = function () {
        if (this.option) {
            this.option.array.forEach(function (element) {
                if (element.isOpen) {
                    element.animations = 'in';
                }
                else {
                    element.animations = 'out';
                }
                if (element.group) {
                    element.group.forEach(function (x) {
                        if (x.isOpen) {
                            x.animations = 'in';
                        }
                        else {
                            x.animations = 'out';
                        }
                    });
                }
            });
        }
    };
    CollapseComponent.prototype.click = function (index, item) {
        this.option.array.forEach(function (parentElem, indexParent) {
            if (index.indexOf('parent') !== -1) {
                if ((index === 'parent' + indexParent)) {
                    item.animations = item.animations === 'out' ? 'in' : 'out';
                }
                else {
                    parentElem.animations = 'out';
                }
            }
            if (parentElem.group) {
                parentElem.group.forEach(function (subElem, indeSub) {
                    if ((index === 'child' + indeSub)) {
                        item.animations = item.animations === 'out' ? 'in' : 'out';
                    }
                    else {
                        subElem.animations = 'out';
                    }
                });
            }
        });
    };
    CollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-dynamic-accordion',
                    template: `<ng-container *ngIf="option">
                    <div *ngFor="let item of option.array; let i=index" [ngClass]="option.addCssClass">
                      <button class="accordion" (click)="click('parent'+i,item)" [disabled]="item. isDisable == true">{{item[option.textKeyHeading]}} </button>
                      <div [@slideInOut]='item.animations'>
                        <div class="panel">
                          <p>{{item[option.textKeyDesc]}}</p>
                          <div *ngFor="let items of item.group; let index=index">
                            <button class="accordion" (click)="click('child'+index,items)" [disabled]="item. isDisable == true">{{items[option.textKeysubHeading]}}</button>
                            <div [@slideInOut]='items.animations'>
                              <div class="panel">
                                <p>{{items[option.textKeysubDesc]}}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ng-container>`,
                    styles: [`.accordion {
                        background-color: #eee;
                        color: rgb(27, 36, 218);
                        cursor: pointer;
                        padding: 18px;
                        width: 100%;
                        border: none;
                        text-align: left;
                        outline: none;
                        font-size: 15px;
                    }
                    
                    .active, .accordion:hover {
                        background-color: #ccc; 
                    }
                    
                    .panel {
                        padding: 0 18px;
                        background-color: white;
                        overflow: hidden;
                    }
                    
                    `],
                    animations: [SlideInOutAnimations]
                },] },
    ];
    /** @nocollapse */
    CollapseComponent.ctorParameters = function () { return []; };
    CollapseComponent.propDecorators = {
        option: [{ type: Input }]
    };
    return CollapseComponent;
}());
export { CollapseComponent };
//# sourceMappingURL=collapse.component.js.map