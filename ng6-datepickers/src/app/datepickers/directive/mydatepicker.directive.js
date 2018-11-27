import { Directive, HostListener, ElementRef, Output, Input, EventEmitter } from '@angular/core';
var MydatepickerDirective = /** @class */ (function () {
    function MydatepickerDirective(el) {
        this.el = el;
        this.eventDate = new EventEmitter();
    }
    MydatepickerDirective.prototype.ngOnInit = function () {
        // console.log(this.option);
    };
    MydatepickerDirective.prototype.onMouseOver = function () {
        var _this = this;
        $(this.el.nativeElement).datepicker({
            minDate: this.option.minimumDate,
            maxDate: this.option.maximumDate,
            dateFormat: this.option.dateFormat,
            firstDay: this.option.firstCalendarDay,
            showButtonPanel: this.option.showButtonPanel,
            closeText: this.option.closeButtonText,
            currentText: 'Now',
            dayNamesMin: this.option.dayName,
            // defaultDate: +7,
            duration: this.option.animationDuration,
            gotoCurrent: true,
            hideIfNoPrevNext: this.option.hideIfNoPrevNext,
            isRTL: this.option.isRTL,
            navigationAsDateFormat: false,
            nextText: this.option.nextIconText,
            numberOfMonths: this.option.numberOfMonthsDisplay,
            showCurrentAtPos: this.option.showCurrentMonthAtPos,
            monthNamesShort: this.option.monthShortName,
            prevText: this.option.prevIconText,
            selectOtherMonths: this.option.selectOtherMonthsDate,
            shortYearCutoff: 50,
            showAnim: this.option.showAnimation,
            showMonthAfterYear: this.option.showBarMonthAfterYear,
            showOtherMonths: this.option.showOtherMonthsDate,
            showWeek: this.option.showWeek,
            weekHeader: this.option.weekHeaderName,
            stepMonths: this.option.MonthsSkip,
            yearRange: this.option.yearsRange,
            yearSuffix: this.option.yearSuffix,
            showOn: this.option.showOn,
            // altField: 'actualDate',
            appendText: this.option.appendText,
            // altFormat: 'yy-mm-dd',
            // autoSize: true,
            buttonImage: this.option.buttonIconImage,
            buttonImageOnly: this.option.buttonImageOnly,
            buttonText: this.option.buttonIconText,
            changeMonth: this.option.monthDropDown,
            changeYear: this.option.yearDropDown,
            // constrainInput: false,
            onSelect: function (selectedDate) {
                _this.eventDate.emit(selectedDate);
            },
        });
    };
    MydatepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[appMydatepicker]'
                },] },
    ];
    /** @nocollapse */
    MydatepickerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MydatepickerDirective.propDecorators = {
        option: [{ type: Input }],
        eventDate: [{ type: Output }],
        onMouseOver: [{ type: HostListener, args: ['mouseover',] }]
    };
    return MydatepickerDirective;
}());
export { MydatepickerDirective };
//# sourceMappingURL=mydatepicker.directive.js.map