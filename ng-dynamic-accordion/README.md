# Angular-dynamic-Accordion

Angular dynamic accordion for web applications. Easy to integrate and use. It contains nested section.

## Getting Started

## Features

* Accordion user array for content show.
* array contain heading, descriptions & nested section heading/descriptions.
* array also contain key for default open section & disabling the particular section key.
* Object that contains multiple feature like heading key & description key.
* you can also add CSS class by passing in object.

### Installation

```
npm i ng-dynamic-accordion

```ts
import { AccordionModule } from 'ng-dynamic-accordion';
// ...

@NgModule({
  imports: [
    AccordionModule
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
  options: object;
  
  ngOnInit () {
    this.userArray = [
      {
        heading: 'section 1 heading', desc: 'section 1 body', isDisable: false, isOpen: true,
        group: [{ subHeading: 'subSection 1 Heading', isOpen: true, subDesc: 'subSection 1 body' }]
      },
      {
        heading: 'section 2 heading', desc: 'section 2 body', isDisable: false, isOpen: false,
        group: [{ subHeading: 'subSection 2 Heading', isOpen: false, subDesc: 'subSection 2 body' }]
      },
      {
        heading: 'section 3 heading', desc: 'section 3 body', isDisable: false, isOpen: false,
        group: [{ subHeading: 'subSection 3 Heading', isOpen: false, subDesc: 'subSection 3 body' }]
      },
      {
        heading: 'section 4 heading', desc: 'section 4 body', isDisable: false, isOpen: false,
        group: [
          { subHeading: 'subSection 4.2 Heading', isOpen: false, subDesc: 'subSection 4.1 body' },
          { subHeading: 'subSection 4.2 Heading', isOpen: false, subDesc: 'subSection 4.2 body' }
        ]
      },
      {
        heading: 'section 5 heading', desc: 'section 5 body', isDisable: false, isOpen: false,
        group: [{ subHeading: 'subSection 5 subHeading', isOpen: false, subDesc: 'subSection 5 body' }]
      },
    ];
  
  this.options = {

      textKeyHeading: 'heading', // Accordion heading key of the array, you can take anything.
      textKeyDesc: 'desc',       // Accordion description key of the array, you can take anything.
      textKeysubHeading: 'subHeading', // Accordion nested section heading key of the array, you can take anything.
      textKeysubDesc: 'subDesc',     // Accordion nested section description key of the array, you can take anything.
      addCssClass: '',         // For adding CSS class in accordion.
      array: this.userArray   // Array of accordion.
    };

  }
}
```

```html

<ng-dynamic-accordion [option] = options ></ng-dynamic-accordion>

```

### options
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| options                    | Type       | Description                                                                                                  | Default Value             |
| :-----------------------   | :--------- | :----------------------------------------------------------------------------------------------------------- | :-------------------------|
| heading                    | String     | Heading of outer section accordion.                                                                          | 'section heading'         |                                                                                                                                                                                                                      
| desc                       | String     | Description of outer section accordion.                                                                      | 'section body'            |                                                                                                                                                                                                    
| subHeading                 | String     | Heading of inner section accordion                                                                           | 'subSection Heading'      |                                                                                                                                                                                                                                                                                            
| subDesc                    | String     | description of inner section accordion.                                                                      | 'subSection body'         |
| textKeyHeading             | String     | Heading Key of outer section accordion.                                                                      | 'heading'                 |                                                                                                                                                                                                                                                       
| array                      | Array<any> | This is User Array                                                                                           | userArray                 |                                                                                                                                                                                                
| textKeyDesc                | String     | description Key of outer section accordion                                                                   |  'desc'                   |                                                                                                                                                                                                                                                                                         
| addCssClass                | String     | add Css class on accordion section                                                                           |  ''                       |                                                                                                                                                                                                                               
| textKeysubHeading          | String     | Heading Key of inner section accordion of user array                                                         |  'subHeading'             |                                                                                                                                                                                                                                                                         
| textKeysubDesc             | String     | description Key of inner section accordion of user array                                                     |  'subDesc'                |                                                                                                                                                                                                                                                    
| isOpen                     | boolean    | for default section open of accordion if true.                                                               |  true                     |                                                                                                                                                                                                                                               
| isDisable                  | boolean    | for disabling particular section of accordion if pass true                                                   |  false                    |                                                                                                                                                                                                                                                                                                                                      
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
