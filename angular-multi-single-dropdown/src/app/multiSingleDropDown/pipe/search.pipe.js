import { Pipe } from '@angular/core';
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
        { type: Pipe, args: [{
                    name: 'search'
                },] },
    ];
    return SearchPipe;
}());
export { SearchPipe };
//# sourceMappingURL=search.pipe.js.map