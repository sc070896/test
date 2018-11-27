#angular6-datepicker

Angular datepicker for web applications. Easy to integrate and use.

## Getting Started

## Features

* datepicker with maximum & minimum selectactable date.
* option for date format.
* datepicker with button panel option.
* At a time open multiple month if pass number of month.
* week header option & show week number in the month.
* step month or skip number of month when user click next/prev button if set month.
* different animation options & duration of animation,can be set.
* change month & day name by using option.
* change close button name, prev/next button name & also change icon image.
* Title bar with normal month & years show & aslo in dropdown format.
* when date of other month show, we can hide by using option.
* restricts year range & add year suffix.
* show first day of calendar using option & show calendar in right to left format.

## Installation

1. Install package from `npm`.

```
  npm i ng6-datepickers
```
2. Download jquery ui from following link-
   https://jqueryui.com/download/
   * click on download buttton, after download extract file.
   * you can see folder, put this folder on your project node_module folder.
   * after this, set path of files in angular.json file. refer following example
   
   
   "styles": [
              "src/styles.css",
              "node_modules/jquery-ui-1.12.1.custom/jquery-ui.css"
            ],
			
			
   "scripts": [
              "node_modules/jquery-ui-1.12.1.custom/external/jquery/jquery.js",
              "node_modules/jquery-ui-1.12.1.custom/jquery-ui.min.js"
             ]		
			 
3. Include Ng6DatepickerModule into your application.

```ts
import { DatepickersModule } from 'ng6-datepickers';


@NgModule({
  imports: [
    DatepickersModule
  ],
})
export class AppModule {}
```

### Usage

```ts
import { Component, OnInit } from '@angular/core';

export class AppComponent implements OnInit {
    options: object;
  
  ngOnInit () {
  
   this.options = {
      dateFormat: 'MM dd, yy', // set selected date format  
      firstCalendarDay: 0,  // set first day of calender by passing {0:sunday, 1: monday}.
      minimumDate: new Date(2015, 1, 1), // set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.
      maximumDate: '+5m +1w', // set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format. 
      showButtonPanel: false, // show button panel if passes true.
      closeButtonText: 'Close', // you can change close button name.
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // set day name by passing in this format.
      monthShortName: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // set day month by passing in this format
      showWeek: false, // show week in left, if set true.
      weekHeaderName: 'W', // heading of week colomn. 
      MonthsSkip: -1, // skips month when click prev/next button, set -1 for skip one month, 1 for skip two month & so on.
      yearsRange: '2016:2018', // set range of years in-between.
      appendText: '(mm-dd-yyyy)', // append date format in right side of datepicker.
      monthDropDown: true,    // month dropdown in title bar.
      yearDropDown: true,   // year dropdown in title bar.
      animationDuration: 'medium', // set animation duration like, slow/medium/fast.
      showAnimation: 'slideDown', // set different animation type like put 'slideDown' & 'fadeIn'.
      hideIfNoPrevNext: true, // if next month is disable, then hide next & prev button by passing true.
      isRTL: false, // show calendar in right to left format.
      // nextIconText: 'Later', // set tooltip for nextbutton icon. default set is next.
      // prevIconText: 'Earlier', set tooltip for prevbutton icon. default set is prev.
      // numberOfMonthsDisplay: [2, 2], // number of month show, here 2 set is for two rows & next 2 for two colomn.
      //showCurrentMonthAtPos: 2, // if numberOfMonthsDisplay is apply then set position of current month.
      selectOtherMonthsDate: false, // if prev/next month date is show in current month,then select date by passing true.
      showOtherMonthsDate: false, // show/hide prev/next month date in current month by set true or false. 
      showBarMonthAfterYear: true, // show month after year in title bar if set true.
      yearSuffix: '', // set year suffix in title bar.
      // showOn: 'both', // if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.
     // buttonImageOnly: true, // show icon image only at right side of datepicker.
     // buttonIconImage: '/assets/images/calendar1.gif', // set icon image of datepicker.
     // buttonIconText: 'Calendar' // set tooltip for icon of datepicker.
    };
  }
  
     receiveDate(selectedDate) {
      console.log(selectedDate); // selected date 
  }
	
}
```

## Example
```html
  <input type="text" [option] = options (eventDate)="receiveDate($event)" appMydatepicker>
```

### options
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| options                    | Type       | Description                                                                                             | Default Value             |
| :-----------------------   | :--------- | :-------------------------------------------------------------------------------------------------------| :-------------------------|
| dateFormat                 | String     | set selected date format by passing date format string.                                                 | 'MM dd, yy'               |                                                                                                                                                                                                                      
| firstCalendarDay           | Number     | set first day of calender by passing {0:sunday, 1: monday}.                                             | 0                         |                                                                                                                                                                                                                                      
| minimumDate                | String/Date| set minimum date by passing this - new Date(2017, 1, 1) format as well as +5m +1w format.               | new Date(2015, 1, 1)      |                                                                                                                                                                                                                                                                                            
| maximumDate                | String/Date| set maximum date by passing this new Date(2017, 1, 1) format as well as +5m +1w format.                 | '+5m +1w'                 |
| showButtonPanel            | boolean    | show button panel if passes true.                                                                       | false                     |                                                                                                                                                                                                                                                       
| closeButtonText            | String     | you can change close button name.                                                                       | 'Close'                   |                                                                                                                                                                                                
| dayName                    | array      | set day name by passing in array format.                                                                | Array                     |                                                                                                                                                                                                                                                                                         
| monthShortName             | array      | set day month by passing in array format                                                                | Array                     |                                                                                                                                                                                                                               
| showWeek                   | boolean    | show week in left, if set true.                                                                         | false                     |                                                                                                                                                                                                                                                                         
| weekHeaderName             | String     | heading name of week colomn.                                                                            | 'W'                       |                                                                                                                                                                                                                                                     
| MonthsSkip                 | Number     | skips month when click prev/next button                                                                 | -1                        |                                                                                                                                                                                                                                               
| yearsRange                 | String     | set range of years in-between.                                                                          | '2016:2018'               |                                                                                                                                                                                                                                      
| appendText                 | String     | append date format in right side of datepicker.                                                         | '(mm-dd-yyyy)'            | 
| monthDropDown              | boolean    | month dropdown in title bar, if set true.                                                               | true                      |  
| yearDropDown               | boolean    | year dropdown in title bar,if set true.                                                                 | true                      |
| animationDuration          | String     | set animation duration like, slow/medium/fast.                                                          | 'medium'                  |
| showAnimation              | String     | set different animation type like put 'slideDown' & 'fadeIn'.                                           | 'slideDown'               |
| hideIfNoPrevNext           | boolean    | if next month is disable, then hide next & prev button by passing true.                                 | true                      | 
| isRTL                      | boolean    | show calendar in right to left format.                                                                  | false                     |
| nextIconText               | String     | set tooltip for nextbutton icon. default set is next.                                                   | 'later'                   |
| prevIconText               | String     | set tooltip for prevbutton icon. default set is prev.                                                   | 'earlier'                 |
| numberOfMonthsDisplay      | array      | number of month show, here 2 set is for two rows & next 2 for two colomn.                               | [2, 2]                    |
| showCurrentMonthAtPos      | Number     | if numberOfMonthsDisplay is apply then set position of current month.                                   | 2                         |
| selectOtherMonthsDate      | boolean    | if prev/next month date is show in current month,then select date by passing true.                      | false                     |
| showOtherMonthsDate        | boolean    | show/hide prev/next month date in current month by set true or false.                                   | false                     |
| showBarMonthAfterYear      | boolean    | show month after year in title bar if set true.                                                         | true                      |
| yearSuffix                 | String     | set year suffix in title bar.                                                                           | ''                        |
| showOn                     | String     | if showon set 'both', then it will show button icon at datepicker right side, default it hide icon.     | 'both'                    |
| buttonImageOnly            | boolean    | show icon image only at right side of datepicker.                                                       | true                      |
| buttonIconImage            | String     | set icon image of datepicker, put image in assets folder & set path.                                    |'/assets/images/cal.gif'   |
| buttonIconText             | String     | set tooltip for icon of datepicker.                                                                     | 'Calendar'                |
|                            |            |                             
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

###Keyboard interaction
 ##While the datepicker is open, the following key commands are available:

* PAGE UP: Move to the previous month.
* PAGE DOWN: Move to the next month.
* CTRL + PAGE UP: Move to the previous year.
* CTRL + PAGE DOWN: Move to the next year.
* CTRL + HOME: Open the datepicker if closed.
* CTRL/COMMAND + HOME: Move to the current month.
* CTRL/COMMAND + LEFT: Move to the previous day.
* CTRL/COMMAND + RIGHT: Move to the next day.
* CTRL/COMMAND + UP: Move to the previous week.
* CTRL/COMMAND + DOWN: Move to the next week.
* ENTER: Select the focused date.
* CTRL/COMMAND + END: Close the datepicker and erase the date.
* ESCAPE: Close the datepicker without selection.

###Date Format:

##Format a date into a string value with a specified format.

#The format can be combinations of the following:

* d - day of month (no leading zero)
* dd - day of month (two digit)
* o - day of the year (no leading zeros)
* oo - day of the year (three digit)
* D - day name short
* DD - day name long
* m - month of year (no leading zero)
* mm - month of year (two digit)
* M - month name short
* MM - month name long
* y - year (two digit)
* yy - year (four digit)
* @ - Unix timestamp (ms since 01/01/1970)
* ! - Windows ticks (100ns since 01/01/0001)
* '...' - literal text
* '' - single quote
* anything else - literal text


## There are also a number of predefined standard date formats available from $.datepicker:

* ATOM - 'yy-mm-dd' (Same as RFC 3339/ISO 8601)
* COOKIE - 'D, dd M yy'
* ISO_8601 - 'yy-mm-dd'
* RFC_822 - 'D, d M y' (See RFC 822)
* RFC_850 - 'DD, dd-M-y' (See RFC 850)
* RFC_1036 - 'D, d M y' (See RFC 1036)
* RFC_1123 - 'D, d M yy' (See RFC 1123)
* RFC_2822 - 'D, d M yy' (See RFC 2822)
* RSS - 'D, d M y' (Same as RFC 822)
* TICKS - '!'
* TIMESTAMP - '@'
* W3C - 'yy-mm-dd' (Same as ISO 8601)


### Callback Methods

* `eventDate` - Return the selected date when a date is click.
  Example : (eventDate)="receiveDate($event)"


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
