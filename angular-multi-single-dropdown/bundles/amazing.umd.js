(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.amazing = {}),global.ng.core,global.common,global.forms));
}(this, (function (exports,core,common,forms) { 'use strict';

    var SearchPipe = /** @class */ (function () {
        function SearchPipe() {
        }
        SearchPipe.prototype.transform = function (items, searchItem, option) {
            if (searchItem) {
                return items.filter(function (x) {
                    return x[option.textKey].indexOf(searchItem) > -1;
                });
            }
            else {
                return items;
            }
        };
        SearchPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'search'
                    },] },
        ];
        return SearchPipe;
    }());

    var DropdownComponent = /** @class */ (function () {
        function DropdownComponent() {
            this.data = [];
            this.toggle = true;
            this.messageEvent = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'app-dropdown',
                        templateUrl: './dropdown.component.html',
                        styleUrls: ['./dropdown.component.css']
                    },] },
        ];
        /** @nocollapse */
        DropdownComponent.ctorParameters = function () { return []; };
        DropdownComponent.propDecorators = {
            option: [{ type: core.Input }],
            messageEvent: [{ type: core.Output }]
        };
        return DropdownComponent;
    }());

    var multiSingleDropDownModule = /** @class */ (function () {
        function multiSingleDropDownModule() {
        }
        multiSingleDropDownModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        declarations: [DropdownComponent, SearchPipe],
                        exports: [
                            DropdownComponent, SearchPipe
                        ]
                    },] },
        ];
        return multiSingleDropDownModule;
    }());

    exports.multiSingleDropDownModule = multiSingleDropDownModule;
    exports.SearchPipe = SearchPipe;
    exports.DropdownComponent = DropdownComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
