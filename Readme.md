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
This is not the first carousel module nor the last carousel module you'll see. But a-carousel is the first module focused on responsive design, simplicity and robustness to turn your carousel nightmares into workable UI masterpieces.

### Setup a-carousel in your React Application
Currently no CDN available
`javascript CDN`
`css CDN`

Package Manager
`npm install a-carousel`


### To add additional styling to Carousel

| Element | Classname |
| ------- | --------- |
| Previous Slide Button | backwardButton |
| ... | ... |
| ... | ... |
| ... | ... |
| ... | ... |
| ... | ... |
| ... | ... |
| ... | ... |


### Options

| Done | Property | Type | Default | Values | Description |
| ---- | -------- | ---- | ------- | ------ | ----------- |
| ❌ | accessability | `boolean` | `true` | true, false | ...FIX!!! Enables tabbing and arrow key navigation. Unless autoplay: true, sets browser focus to current slide (or first of current slide set, if multiple slidesToShow) after slide change. For full a11y compliance enable focusOnChange in addition to this. |
| ✅ | arrow | `boolean` | `true` | true, false | Enable the next and previous buttons on the carousel |
| ❌ | arrowPosition | `string` | `outside` | outside, inside, bottom, below | Determines the location of the next/prev arrow placement |
| ❌ | arrowStyle | `string` | `arrow` | ... | ... |
| ❌ | speed | `number` | `0.3(s)` | any positive number | Determines the transition speed of the carousel slides in seconds |
| ❌ | timing | `string` | `ease-in-out` | Refer to: [W3School CSS Transition-Timing-Property](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) for all possible values | Determines the transition timing function of the carousel slides |
| ❌ | autoplay | `boolean` | `false` | true, false | Automatically scroll through the slides inside the carousel |
| ❌ | autoplaySpeed | `number` | `3(s)` | any positive number | Determines the amount of time spent before moving to the next carousel slide |
| ❌ | dots | `boolean` | `false` | true, false | Enable slide indicator dots to show the current slide |
| ❌ | dotsClick | `boolean` | `true` | true, false | Enables indicator dots to be clickable to go to particular slide numbers |
| ❌ | touch | `boolean` | `true` | true, false | Enabled touch scrolling of the carousel |

| ❌ | arrowStyle | `string` | `arrow` | ... | ... |

| ❌ | arrowStyle | `string` | `arrow` | ... | ... |



### How to Contribute to the Project

how to set up environment and tools