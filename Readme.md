# A Carousel

### Description
A React Project to simplify UI Carousels

[Examples of a-carousel](#)

----------------------

### Setup a-carousel

#### Package Manager

```
// npm
npm install a-carousel

// yarn
yarn add a-carousel
```

#### Include the CSS file

1. either use webpack & load it in..
2. import the file directly

```
code example goes here
```


#### Example
 
```
code example goes here
```
----------------------

### Options


| Done | Property | Type | Default | Values | Description |
| :--: | :------: | :--: | :-----: | :----: | :---------: |
| ❌ | accessability | `boolean` | `true` | true<br>false | ...FIX!!! Enables tabbing and arrow key navigation. Unless autoplay: true, sets browser focus to current slide (or first of current slide set, if multiple slidesToShow) after slide change. For full a11y compliance enable focusOnChange in addition to this. |
| ✅ | arrow | `boolean` | `true` | true, false | Enable the next and previous buttons on the carousel |
| ✅ | arrowPosition | `string` | `outside` | outside<br>inside<br>bottom<br>below | Determines the location of the next/prev arrow placement |
| ❌ | arrowStyleBackward | `string` | `default` | default<br>\<classname\> | Applies the default styling or a custom classname for styling to the backward arrow. In the custom classname, utilize CSS properties: `top, bottom, left, right` for position of arrow. Utilize CSS properties: `width, height, background-color, background-image, border etc.` for styling of arrow. |
| ❌ | arrowStyleForward | `string` | `default` | default<br>\<classname\> | Applies the default styling or a custom classname for styling to the forward arrow. In the custom classname, utilize CSS properties: `top, bottom, left, right`for position of arrow. Utilize CSS properties: `width, height, background-color, background-image, border etc.` for styling of arrow. |
| ✅ | autoplay | `boolean` | `false` | true<br>false | Automatically scroll through the slides inside the carousel |
| ✅ | autoplaySpeed | `number` | `3(s)` | any number > 0 | Determines the amount of time spent before moving to the next carousel slide |
| ✅ | speed | `number` | `0.3(s)` | any number > 0 | Determines the transition speed of the carousel slides in seconds |
|  ✅ | timing | `string` | `ease-in-out` | Refer to: [W3School CSS Transition-Timing-Property](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) for all possible values | Determines the transition timing function of the carousel slides |
| ❌ | dots | `boolean` | `false` | true<br>false | Enable slide indicator dots to show the current slide |
| ❌ | dotsClick | `boolean` | `true` | true<br>false | Enables indicator dots to be clickable to go to particular slide numbers |
| ❌ | touch | `boolean` | `true` | true<br>false | Enabled touch scrolling of the carousel |
| ❌ | ... | ... | ... | ... | ... |
| ❌ | ... | ... | ... | ... | ... |

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


### FAQ
These are some common issues people have with setting up and using the a-carousel module.

### Error Messages
| Error Number | Description |
| ------------ | ----------- |
| [1] | ... |
| [2] | ... |
| [3] | ... |
| [4] | ... |
| [5] | ... |
| [6] | ... |
| [7] | ... |