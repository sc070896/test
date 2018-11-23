import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { DropdownComponent } from './dropdown/dropdown.component';
var multiSingleDropDownModule = /** @class */ (function () {
    function multiSingleDropDownModule() {
    }
    multiSingleDropDownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [DropdownComponent, SearchPipe],
                    exports: [
                        DropdownComponent, SearchPipe
                    ]
                },] },
    ];
    return multiSingleDropDownModule;
}());
export { multiSingleDropDownModule };
//# sourceMappingURL=multiSingleDropDown.module.js.map