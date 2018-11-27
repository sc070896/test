(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/core'), require('@angular/common'), require('@angular/platform-browser/animations'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/animations', '@angular/core', '@angular/common', '@angular/platform-browser/animations', '@angular/platform-browser'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.accordion = {}),global.animations,global.ng.core,global.common,global.animations$1,global.platformBrowser));
}(this, (function (exports,animations,core,common,animations$1,platformBrowser) { 'use strict';

    var SlideInOutAnimations = [
        animations.trigger('slideInOut', [
            animations.state('in', animations.style({
                'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
            })),
            animations.state('out', animations.style({
                'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
            })),
            animations.transition('in => out', [animations.group([
                    animations.animate('400ms ease-in-out', animations.style({
                        'opacity': '0'
                    })),
                    animations.animate('600ms ease-in-out', animations.style({
                        'max-height': '0px'
                    })),
                    animations.animate('700ms ease-in-out', animations.style({
                        'visibility': 'hidden'
                    }))
                ])]),
            animations.transition('out => in', [animations.group([
                    animations.animate('1ms ease-in-out', animations.style({
                        'visibility': 'visible'
                    })),
                    animations.animate('600ms ease-in-out', animations.style({
                        'max-height': '500px'
                    })),
                    animations.animate('800ms ease-in-out', animations.style({
                        'opacity': '1'
                    }))
                ])])
        ]),
    ];

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
            { type: core.Component, args: [{
                        selector: 'app-collapse',
                        templateUrl: './collapse.component.html',
                        styleUrls: ['./collapse.component.css'],
                        animations: [SlideInOutAnimations]
                    },] },
        ];
        /** @nocollapse */
        CollapseComponent.ctorParameters = function () { return []; };
        CollapseComponent.propDecorators = {
            option: [{ type: core.Input }]
        };
        return CollapseComponent;
    }());

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        AccordionModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            animations$1.BrowserAnimationsModule,
                            platformBrowser.BrowserModule,
                        ],
                        declarations: [CollapseComponent],
                        exports: [CollapseComponent]
                    },] },
        ];
        return AccordionModule;
    }());

    exports.AccordionModule = AccordionModule;
    exports.CollapseComponent = CollapseComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
