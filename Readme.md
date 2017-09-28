# A Carousel

### Description
A React Project to simplify UI Carousels

[Examples of a-carousel](https://eric-zhu-uw.github.io/)

----------------------

### Setup a-carousel

#### Package Manager

```
// NPM
npm install a-carousel

// YARN
yarn add a-carousel
```

#### Include the CSS file

1. webpack-loader
2. import the file directly

Option 1.

Add css-loader and style-loader with:
`yarn add css-loader style-loader --dev` or `npm install css-loader style-loader --save-dev`
```

```

Option 1
```
 <link rel='stylesheet' type='text/css' href='../node_modules/a-carousel/build/styles.css' />
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
| ✅ | arrowStyleBackward | `string` | `default` | default<br>\<classname\> | Applies the default styling or a custom classname for styling to the backward arrow. In the custom classname, utilize CSS properties: `top, bottom, left, right` for position of arrow. Utilize CSS properties: `width, height, background-color, background-image, border etc.` for styling of arrow. |
| ✅ | arrowStyleForward | `string` | `default` | default<br>\<classname\> | Applies the default styling or a custom classname for styling to the forward arrow. In the custom classname, utilize CSS properties: `top, bottom, left, right`for position of arrow. Utilize CSS properties: `width, height, background-color, background-image, border etc.` for styling of arrow. |
| ✅ | autoplay | `boolean` | `false` | true<br>false | Automatically scroll through the slides inside the carousel |
| ✅ | autoplaySpeed | `number` | `3(s)` | any number > 0 | Determines the amount of time spent before moving to the next carousel slide |
| ✅ | speed | `number` | `0.3(s)` | any number > 0 | Determines the transition speed of the carousel slides in seconds |
| ✅ | timing | `string` | `ease-in-out` | Refer to: [W3School CSS Transition-Timing-Property](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) for all possible values | Determines the transition timing function of the carousel slides |
| ✅ | dots | `boolean` | `false` | true<br>false | Enable slide navigation dots to show the current slide |
| ✅ | dotsClick | `boolean` | `true` | true<br>false | Enables indicator dots to be clickable to go to particular slide numbers |
| ❌ | dotsStyle | `string` | `default` | default<br>\<classname\> | Applies the default styling or a custom classname for styling the dots navigation |
| ❌ | dotsPosition | `string` | `below` | bottom<br>below | Determines the location of the dots navigation. Can be overrided by dotsStyle and adding position styling attributes |
| ❌ | dotsActiveStyle | `boolean` | `true` | true<br>false | Attached an active class to the corresponding dot the carousel is currently displaying |
| ❌ | touch | `boolean` | `true` | true<br>false | Enabled touch scrolling of the carousel |
| ❌ | touchThreshold | `number` | 0.5 | 0 < number <= 1 | To swipe a slide, you must scroll thos ratio of the slide |
| ❌ | z-index| `number` | ... | ... | Sets the z-index of the carousel |
| ❌ | infinite | `boolean` | `true` | true<br>false | Determines if you can scroll infinitely through the slides |
| ✅ | initial-slide | `number` | 0 | 0 < number < # of slides | Determines which slide the carousel starts on |
| ❌ | allowButtonSpam | `boolean` | `false` | true<br>false | Determines if you can spam click the forward/backward button or if you need to wait for the animation to finish |
| ❌ | ... | ... | ... | ... | ... |


### To add additional styling to Carousel

| Element | Classname |
| ------- | --------- |
| Previous Slide Button | `backwardButtonCarousel` |
| Next Slide Button | `forwardButtonCarousel` |
| Navigation Dots | `dotsCarousel` |
| ... | ... |
| ... | ... |


### FAQ
These are some common issues people have with setting up and using the a-carousel module.

### Error Messages
| Error Number | Description |
| :----------: | ----------- |
| [1] | Must have 2 or more children elements within the Carousel Component to be considered valid |
| [2] | Must enter a `boolean` for the **arrow** property |
| [3] | Must enter a `number > 0` for the **speed** property |
| [4] | Must enter a valid CSS-transition-timing-function. Refer to https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp |
| [5] | Must enter a `boolean` for the **autoplay** property |
| [6] | Must enter a `number > 0` for the **autoplaySpeed** property |
| [7] | Must enter one of: outside, inside, bottom, below` |
| [8] | Must enter a `string` for the **arrowStyleBackward** property |
| [9] | Must enter a `string` for the **arrowStyleForward** property |
| [10] | Must enter a `boolean` for the **dots** property  |
| [11] | just enter a boolean value for the **dotsClick** property |
| [12] | Must enter a (int) number between 0 and (#slides - 1) for the **initialSlide** property |