import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class MydatepickerDirective implements OnInit {
    private el;
    option: any;
    eventDate: EventEmitter<string>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    onMouseOver(): void;
}
