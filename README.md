bar-of-progress
===============
An easily overridable progress bar.
Switch between horizontal and vertical styles out of the box.

[Click here to view an example](https://cdn.rawgit.com/MatthewLarner/bar-of-progress/master/example/index.html)

## Usage
```javascript
var Brogress = require('bar-of-progress'),
    bar = new Brogress();

document.body.appendChild(bar.element);

bar.value(0.5); //sets the value to 0.5
bar.value(); // returns current value 0.5
```

## Styling
Some minimal styling is added out of the box but is easily overridden.

**bar-of-progress** is implemented with two divs, a parent and a container.
 *.progress-bar*  is the parent element.
 *.value* is the child element.

Some example styling:
```css
.progress-bar {
    width: 350px;
    height: 25px;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.25) inset;
}

.progress-bar .value {
    background-color: teal;
}
```
The parent element has an additional class to match it's current style.
*.horizontal* or *.vertical*

For example:
```css
.progress-bar.vertical {
    width: 25px;
    height: 260px;
}
```

## Api
Properties are implemented as getter setter functions.
Call with no parameters to get the current value or call with with a value to set.

properties:

### .min()
gets the current progress min
defaults to `0`
### .min(value)
sets the progress min

### .max()
gets the current progress max.
defaults to `1`
### .max(value)
sets the progress max

### .value()
gets the current progress value
### .value(value)
sets the progress value

### .style()
gets the current style
defaults to `'horizontal'`
### .style(style)
sets the style
valid values are `'horizontal'` or `'vertical'`

## Update functions
more styles can be added by adding a property with an update function to
`.updateFunctions`

```javascript
bar.updateFunctions['segmented'] = function(){
    //implement your segmented update function here
}

//style can then be set as normal
bar.style('segmented');
```

### Run the tests
npm test

### Run the example
npm run example

