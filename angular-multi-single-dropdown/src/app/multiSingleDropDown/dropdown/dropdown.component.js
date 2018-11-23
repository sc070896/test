import { Component, Input, Output, EventEmitter } from '@angular/core';
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.data = [];
        this.toggle = true;
        this.messageEvent = new EventEmitter();
    }
    DropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.option.array.forEach(function (v) {
            if (v.checked) {
                _this.data.push(v);
            }
        });
    };
    DropdownComponent.prototype.getData = function (event, item) {
        if (event.target.checked) {
            this.data.push(item);
        }
        else {
            if (this.data) {
                this.index = this.data.findIndex(function (x) {
                    return Object.keys(item).every(function (key) {
                        return x[key] === item[key];
                    });
                });
                this.data.splice(this.index, 1);
            }
        }
        this.messageEvent.emit(this.data);
    };
    DropdownComponent.prototype.selectAll = function (getArr) {
        var _this = this;
        getArr.forEach(function (element) {
            if (element.checked === true) {
                return false;
            }
            else {
                element.checked = true;
                _this.data.push(element);
            }
        });
        this.messageEvent.emit(this.data);
    };
    DropdownComponent.prototype.unSelectAll = function (arrData) {
        var _this = this;
        arrData.forEach(function (element) {
            if (element.checked === false) {
                return true;
            }
            else {
                element.checked = false;
                _this.index = _this.data.findIndex(function (x) {
                    return Object.keys(element).every(function (key) {
                        return x[key] === element[key];
                    });
                });
                _this.data.splice(_this.index, 1);
            }
        });
        this.messageEvent.emit(this.data);
    };
    DropdownComponent.prototype.updateSelection = function (position, array, event, item) {
        this.data = [];
        array.forEach(function (x, index) {
            if (position !== index) {
                x.checked = false;
            }
        });
        if (event.target.checked) {
            this.data.push(item);
        }
        this.messageEvent.emit(this.data);
    };
    DropdownComponent.prototype.clear = function () {
        this.searchText = '';
    };
    DropdownComponent.prototype.delete = function (item) {
        this.index = this.data.findIndex(function (x) {
            return Object.keys(item).every(function (key) {
                return x[key] === item[key];
            });
        });
        this.data.splice(this.index, 1);
        var check = this.option.array.forEach(function (element) {
            Object.keys(item).every(function (key) {
                if (element[key] === item[key]) {
                    return element.checked = false;
                }
            });
        });
        this.toggle = true;
    };
    DropdownComponent.decorators = [
        { type: Component, args: [{
            selector: 'ng-multi-select-dropdown',
            template: `<div  [ngClass]="option.addCssClass">
            <button type="button" class="button" (click)="toggle = !toggle" >
              <ng-container *ngIf="data.length > 0; else elseSelect">
                <ng-container *ngIf="data.length <= option.itemsShowLimit; else numberTemplate">
                  <span *ngFor="let item of data; let last = last">{{item[option.textKey]}}<span class="delete" (click)="delete(item) ">
                    <span>x</span>
                    </span>
                    <span *ngIf="data.length>1 && !last">, </span>
                  </span>
                </ng-container>
                <ng-template #numberTemplate>
                  {{data.length}} Selected
                </ng-template>
          
              </ng-container>
              <ng-template #elseSelect>
                <ng-container *ngIf="option.texts.selectPlaceHolder; else elsePlace">
                  {{option.texts.selectPlaceHolder}}
                </ng-container>
                <ng-template #elsePlace>
                  Select 
                </ng-template>
              </ng-template>
            </button>
          
            <div   class="row"  [hidden]= "toggle"  *ngIf="option.array.length > 0">
              <div class="column">
                  <div class="card">
                <div class="searchDiv" *ngIf="option.allowSearchFilter == true">
                  <input type="search" class="search" placeholder="{{option.texts.searchPlaceHolder}}" [(ngModel)]="searchText">
                </div>
          
                <div class="selectDiv" *ngIf="option.isSelect == true && option.isMultiSelectOrSingleSelect === true && option.disableDropdown == false">
                  <input type="button" class="button" value="{{option.texts.selectAllButtonName}}" (click)="selectAll(option.array)">
                  <input type="button" class="button" value="{{option.texts.unSelectAllButtonName}}" (click)="unSelectAll(option.array)">
                </div> 
          
              <ng-container *ngIf="option.isMultiSelectOrSingleSelect === true ; else elseTemplate">
                <div class="checkBoxDiv "  *ngFor="let item of option.array|search:searchText:option">
                  
                      <label class="container" >
                    <input type="checkbox" name="check" [disabled] = option.disableDropdown  [(ngModel)]="item.checked" (change)="getData($event, item)" [value]="item[option.valueKey]">{{item[option.textKey]}}
                    <span class="checkmark"></span>  
                  </label>
                </div>
              </ng-container>
          
              <ng-template #elseTemplate>
                <div class="table-div checkBoxDiv">
                  <table>
                    <tr *ngFor="let entity of option.array | search:searchText:option ; let index = index">
                      <td>
                          <label class="container">
                        <input type="checkbox" [(ngModel)]="entity.checked" [value]="entity[option.valueKey]" (click)="updateSelection(index, option.array, $event, entity )" />{{entity[option.textKey]}}
                        <span class="checkmark"></span> 
                      </label>
                      </td>
                    </tr>
                  </table>
                </div>
              </ng-template>
          
              <ng-container *ngIf="option.texts.closeButtonName; else elseButton">
                <button class="btn btn-danger">{{option.texts.closeButtonName}}</button>
              </ng-container>
          
              <ng-template #elseButton>
                <div class="selectDiv close" (click)="clear()">
                <button class="button selectDiv" (click)="toggle = !toggle">close </button>
              </div>
              </ng-template>
              </div>
            </div>
          </div>
          </div>`,
          styles: [`/* The container */
          .container {
              display: block;
              position: relative;
              padding-left: 25px;
              margin-bottom: 1px;
              cursor: pointer;
              font-size: 18px;
          }
          
          /* Hide the browser's default checkbox */
          .container input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
          }
          
          /* Create a custom checkbox */
          .checkmark {
              position: absolute;
              top: 0;
              left: 0;
              height: 16px;
              width: 16px;
              background-color: #eee;
          }
          
          /* On mouse-over, add a grey background color */
          .container:hover input ~ .checkmark {
              background-color: #ccc;
          }
          
          /* When the checkbox is checked, add a blue background */
          .container input:checked ~ .checkmark {
              background-color: #76797c;
          }
          
          /* Create the checkmark/indicator (hidden when not checked) */
          .checkmark:after {
              content: "";
              position: absolute;
              display: none;
          }
          
          /* Show the checkmark when checked */
          .container input:checked ~ .checkmark:after {
              display: block;
          }
          
          /* Style the checkmark/indicator */
          .container .checkmark:after {
              left: 6px;
              top: 2px;
              width: 2px;
              height: 7px;
              border: solid white;
              border-width: 0 3px 3px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
          }
          
          * {
            box-sizing: border-box;
          }
          
          
          
          /* Float four columns side by side */
          .column {
              float: auto;
              width: 18%;
              padding: 0 5px;
          }
          
          .row {margin: 0 -5px;}
          
          /* Clear floats after the columns */
          .row:after {
            content: "";
            display: table;
            clear: both;
          }
          
          /* Responsive columns */
          @media screen and (max-width: 600px) {
            .column {
              width: 100%;
              display: block;
              margin-bottom: 10px;
            }
          }
          
          /* Style the counter cards */
          .card {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              padding: 0 0 0 0;
              background-color: white;
              border: 1px solid #ddd;
          }
          .button {
              background:rgba(0, 0, 0, 0) linear-gradient(to bottom, #0375ff 0%, #025cc9 100%) repeat scroll 0 0;
              border: none;
              color: white;
              padding: 5px 10px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 15px;
              cursor: pointer;
          }
          
          .search {
              width: 100%;
              height: 35px;
              padding-left: 10px;
              border: 1px solid #eee;
          }
          
          .searchDiv {
              width: 100%;
              margin-bottom: 10px;
          }
          
          .table-div{
              margin-left: 10px;
          }
          
          .selectDiv {
              text-align: center;
              margin: 10px 0 10px 0px;
          }
          
          .checkBoxDiv {
              margin-left: 10px;
              text-align: left;
          }
          
          .selectDiv .button{
              padding: 5px 10px;
              font-size: 12px;
              margin-right: 5px;
              margin-left: 5px;
          }
          
          .selectDiv.close{
              margin: 0px;
          }
          
          .delete{
              
              background: #FFF;
              border: 1px solid;
              border-radius: 20px;
              display: inline-block;
              width: 12px;
              height: 12px;
              margin-left: 5px;
          }
          .delete span{
              font-size: 10px;
              display: block;
              color: #444;
                  }
          
          
          `]
                },] },
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return []; };
    DropdownComponent.propDecorators = {
        option: [{ type: Input }],
        messageEvent: [{ type: Output }]
    };
    return DropdownComponent;
}());
export { DropdownComponent };
//# sourceMappingURL=dropdown.component.js.map