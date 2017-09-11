1. peer dependencies


npm version
npm publish


npm link
npm link <pkg-name> in the testing folder


How to include the CSS file...
1. either use webpack & load it in..
2. import the file directly

### To add additional styling to Carousel

| Element | Classname |
| ------- | --------- |
| Previous Slide Button | backwardButton |

### Options

| Done | Property | Type | Default | Values | Description |
|| -------- | ---- | ------- | ------ | ----------- |
| ✅ | arrow | `boolean` | `true` | true, false | Enable the next and previous buttons on the carousel |
| ❌ | arrowPosition | `string` | `outside` | outside, inside, bottom, below | Determines the location of the next/prev arrow placement |
| ❌ | arrowStyle | `string` | `arrow` | ... | ... |