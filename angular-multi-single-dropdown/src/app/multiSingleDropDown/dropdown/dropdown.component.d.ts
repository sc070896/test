import { OnInit, EventEmitter } from '@angular/core';
export declare class DropdownComponent implements OnInit {
    data: any;
    index: number;
    entities: any;
    toggle: boolean;
    searchText: string;
    option: any;
    messageEvent: EventEmitter<string[]>;
    constructor();
    ngOnInit(): void;
    getData(event: any, item: any): void;
    selectAll(getArr: any): void;
    unSelectAll(arrData: any): void;
    updateSelection(position: number, array: any, event: any, item: any): void;
    clear(): void;
    delete(item: any): void;
}
