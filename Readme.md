1. peer dependencies


npm version
npm publish


npm link
npm link <pkg-name> in the testing folder


How to include the CSS file...
1. either use webpack & load it in..
2. import the file directly

# A Carousel
A React Module simplifying UI Carousels

### Description


### MORE INFORMATION

### To add additional styling to Carousel

| Element | Classname |
| ------- | --------- |
| Previous Slide Button | backwardButton |

### Options

| Done | Property | Type | Default | Values | Description |
| ---- | -------- | ---- | ------- | ------ | ----------- |
| ❌ | accessability | `boolean` | `true` | true, false | ...FIX!!! Enables tabbing and arrow key navigation. Unless autoplay: true, sets browser focus to current slide (or first of current slide set, if multiple slidesToShow) after slide change. For full a11y compliance enable focusOnChange in addition to this. |
| ✅ | arrow | `boolean` | `true` | true, false | Enable the next and previous buttons on the carousel |
| ❌ | arrowPosition | `string` | `outside` | outside, inside, bottom, below | Determines the location of the next/prev arrow placement |
| ❌ | arrowStyle | `string` | `arrow` | ... | ... |
| ❌ | speed | `number` | `0.3(s)` | any positive number | Determines the transition speed of the slides in seconds |
| ❌ | timing | `string` | `ease-in-out` | ... | Determines the transition timing function; can take any value from (https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp, "W3School CSS Transition-Timing-Property") |
| ❌ | ... | ... | ... | ... | ... |
| ❌ | ... | ... | ... | ... | ... |
| ❌ | ... | ... | ... | ... | ... |
| ❌ | ... | ... | ... | ... | ... |


### How to Contribute to the Project

how to set up environment and tools