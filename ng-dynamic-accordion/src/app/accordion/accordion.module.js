import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse/collapse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    AccordionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        BrowserAnimationsModule,
                        BrowserModule,
                    ],
                    declarations: [CollapseComponent],
                    exports: [CollapseComponent]
                },] },
    ];
    return AccordionModule;
}());
export { AccordionModule };
//# sourceMappingURL=accordion.module.js.map