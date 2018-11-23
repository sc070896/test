# angular-multi-single-select-dropdown

Angular multiselect dropdown component for web applications. Easy to integrate and use. It can be bind to any custom data source.

## Getting Started

## Features

* dropdown with single/multiple selction option
* bind to any custom data source
* search filter for searching list of data
* show or hide select all/deselect All button
* select/de-select all items
* textKey of array, example- name: 'santosh', here name is the text key
* valueKey of array, example- name: 'santosh', here name is the value key
* itemsShowLimit in select button
* addCssClass, add css class in multi-select-dropdown
* multi-select-dropdown custom placeholder
* multi-select-dropdown custom change close button name
* multi-select-dropdown custom change select-all/de-select-all button name
* custom search filter placeholder

### Installation

```
npm i angular-multi-single-dropdown


```ts
import { multiSingleDropDownModule } from 'angular-multi-single-dropdown';
// ...

@NgModule({
  imports: [
    multiSingleDropDownModule
    // ...
  ]
  // ...
})
export class AppModule {}
```

### Usage

```ts
import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit {
  userArray: any[] = [];
  selectedItems = [];
  options: object;
  
  ngOnInit () {
    this.userArray = [{ name: 'santosh', id: 1 },
    { name: 'nitin', id: 2 },
    { name: 'riya', id: 3 },
    { name: 'rishi', id: 4 },
	{ name: 'muskan', id: 5 },
	{ name: 'nandini', id: 6 }, 
    { name: 'krishna', id: 7 }]; // in array, Id is optional
  
  this.options = {
      allowSearchFilter: true,  // boolean option if user want to show or hide search box in drop-down
      isSelect: true,  // option if user want to show or hide selectAll/DeSelectAll button in drop-down
      isMultiSelectOrSingleSelect: true,  // if set true then you can use Multi-select drop-down else you can use single select drop-down
      textKey: 'name',  // this is the text-Key of your array, example- name: 'santosh', here name is the text key
      valueKey: 'name',  // this is the value-Key of your array, example- name: 'santosh' or id: 1
      array: this.userArray,  // This is User Array
      itemsShowLimit: 3,  // option if user want to show minimum 3 selected data in drop-down button
      addCssClass: '',  // By using this user can add CSS class in drop-down
      texts: {
        selectPlaceHolder: '',  // This is placeholder of drop-down, if user set empty then default placeholder will be showed
        closeButtonName: '',  // user can change close button name by passing name, default it set close
        selectAllButtonName: 'Select All',  // user can change or edit select All button name
        unSelectAllButtonName: 'UnSelect All',  // user can change or edit Unselect All button name
        searchPlaceHolder: 'Search drop-down items' // user can change or edit search placehoder
      },
      disableDropdown: false // disable dropdown
    };
  }
  
  

     onItemSelect(event): void {
      this.selectedItems = event;  // getArrayData is your selected checkbox data array
      console.log(this.selectedItems);
  }
	
}
```

```html
<ng-multi-select-dropdown [option] = options 
                          (messageEvent)='onItemSelect($event)'>
</ng-multi-select-dropdown>
```

### options
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| options                    | Type       | Description                                                                                                  | Default Value             |
| :-----------------------   | :--------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------|
| allowSearchFilter          | Boolean    | If set `true` then search filter will be show in multi-select-dropdown else hide.                            | true                      |                                                                                                                                                                                                                      
| isSelect                   | Boolean    | if you want to show or hide selectAll/DeSelectAll button in drop-down.                                       | true                      |                                                                                                                                                                                                                                      
| isMultiSelectOrSingleSelect| Boolean    | if set true then you can use Multi-select drop-down else you can use single select drop-down                 | true                      |                                                                                                                                                                                                                                                                                            
| textKey                    | String     | this is the text-Key of your array, example- name: 'santosh', here name is the text key                      | 'name'                    |
| valueKey                   | String     | this is the value-Key of your array, example- name: 'santosh' or id: 1                                       | 'name'                    |                                                                                                                                                                                                                                                       
| array                      | Array<any> | This is User Array                                                                                           | user Array                |                                                                                                                                                                                                
| itemsShowLimit             | Number     | Limit the number of items to show in the input select button. If not set will show number of selected.       |  3                        |                                                                                                                                                                                                                                                                                         
| addCssClass                | String     | By using this user can add CSS class in drop-down                                                            |  ''                       |                                                                                                                                                                                                                               
| selectPlaceHolder          | String     | This is placeholder of drop-down, if you set empty then default placeholder will be showed                   |  ''                       |                                                                                                                                                                                                                                                                         
| closeButtonName            | String     | user can change close button name by passing name, default it set close.                                     |  ''                       |                                                                                                                                                                                                                                                     
| selectAllButtonName        | String     | user can change or edit select All button name                                                               |  'Select All'             |                                                                                                                                                                                                                                               
| unSelectAllButtonName      | String     | user can change or edit Unselect All button name                                                             |  'UnSelect All'           |                                                                                                                                                                                                                                      
| searchPlaceHolder          | String     | user can change or edit search placehoder.                                                                   |  'Search drop-down items' | 
| disableDropdown            | boolean    | disable dropdown checkbox                                                                                    |   false                   |                                                                                                 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Callback Methods

* `messageEvent` - Return the selected item when an item is checked.
  Example : (messageEvent)="onItemSelect($event)"


## Run locally

* Clone the repository or downlod the .zip,.tar files.
* Run `npm install`
* Run `ng serve` for a dev server
* Navigate to `http://localhost:4200/`

## Library Build / NPM Package

Run `yarn build:lib` to build the library and generate an NPM package. The build artifacts will be stored in the dist-lib/ folder.

## Development

This project was generated with Angular CLI version 6.0.8.

## Contributions

Contributions are welcome, please open an issue and preferrably file a pull request.

### Opening Issue

Please share sample code using codesandbox.com or stackblitz.com to help me re-produce the issue.

## License

MIT License.
