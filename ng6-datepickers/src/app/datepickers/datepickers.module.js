import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MydatepickerDirective } from './directive/mydatepicker.directive';
var DatepickersModule = /** @class */ (function () {
    function DatepickersModule() {
    }
    DatepickersModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [MydatepickerDirective],
                    exports: [MydatepickerDirective]
                },] },
    ];
    return DatepickersModule;
}());
export { DatepickersModule };
//# sourceMappingURL=datepickers.module.js.map