import React from 'react';

/* TO DO LIST
1. update the buttons and give options to how to style the button... "side, inside the carousel, below the carousel"
2. allow users to chose the button styling... 4-5 default types : hover animation
3. Update so the circle selector is being updated based off <this.state.slide>

*/

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    // Purpose: Validate the developer input to ensure 2+ children are inputted
    if(this.props.children === undefined || this.props.children.length === undefined) {
      throw new Error('[1] - Must enter 2 or more children within the Carousel Component!');
    }

    // Purpose: Check arrow property that it is a boolean or undefined
    if(typeof(this.props.arrow) !== 'boolean' && this.props.arrow !== undefined) {
      throw new Error('[2] - Must enter a boolean value for the <arrow> property');
    }

    // Purpose: Check speed property that it is a number >= 0 or undefined
    if((isNaN(this.props.speed) && this.props.speed !== undefined) || this.props.speed < 0) {
      throw new Error('[3] - Must enter a number >= 0 for the <speed> property');
    }

    // Purpose: Check timing property that it is a string or undefined
    if(typeof(this.props.timing) !== 'string' && this.props.timing !== undefined) {
      throw new Error(`[4] - Must enter a valid css transition-timing-function for the <timing> property. Refer to
        https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp`);
    }

    // Purpose: Check timing property that it is a valid transition-timing-function property
    const cubicBezierRegex = new RegExp(/^cubic-bezier\((\s*0(\.\d+)?\s*,|\s*1(\.0+)?\s*,){3}(\s*0(\.\d+)?\s*|\s*1(\.0+)?)\s*\)$/);
    const transitionTimingRegex = new RegExp(/^linear|ease|ease-in|ease-out|ease-in-out|initial|inherit$/);
    if(typeof(this.props.timing) === 'string' && !this.props.timing.match(cubicBezierRegex) && !this.props.timing.match(transitionTimingRegex)) {
      throw new Error(`[4] - Must enter a valid css transition-timing-function for the <timing> property. Refer to
        https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp`);
    }

    // Purpose: Check autoplay property that it is a boolean or undefined
    if(typeof(this.props.autoplay) !== 'boolean' && this.props.autoplay !== undefined) {
      throw new Error('[5] - Must enter a boolean value for the <autoplay> property');
    }

    //check more props here
    /* ========================================================================================== */

    // MUST ARRANGE SHIT ALPHABETICALLY
    /* ==========================================================================================
     *  forward: Keep context of <this> forward() function in the class regardless of invocation location
     *  backward: Keep context of <this> backward() function in the class regardless of invocation location
     *  numSlides: Total number of slides: this.props.children.length + 2
     *  multipleContainerWidth: The total size of the slides: this.numSlides * 100 (in proportion to carousel-size)
     *  width: always 100 (can be updated later for more functionalities)
     *  height: always 100 (can be updated later for more functionalities)
     *  widthSuffix: always % (can be updated later for more functionalities)
     *  heightSuffix: always % (can be updated later for more functionalities)
     *  arrow: Enable the next and previous buttons
     *    ~| type: boolean | default: true |
     *
     *  arrowPosition: the positioning of the navigation arrows
     *    ~| type: string | default: 'outside' |
     *
     *  arrowStyle: ...!?!?!?!?
     *
     *  autoplay: Enable automatic scrolling of slides
     *    ~| type: boolean | default: false |
     *
     *  speed: the speed in (s) in which the silder changes
     *    ~| type: number | default: 0.3seconds |
     *
     *  timing: the type of transition style based of CSS property transition-timing-function
     *    ~| type: string | default: 'ease-in' |
     * ========================================================================================== */
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.numSlides = this.props.children.length + 2;
    this.multipleContainerWidth = this.numSlides * 100;
    this.width = 100;
    this.height = 100;
    this.widthSuffix = '%';
    this.heightSuffix = '%';
    this.arrow = this.props.arrow === undefined ? true : this.props.arrow;
    this.arrowStyle = this.props.arrow === undefined ? true : this.props.arrowStyle;
    this.arrowPosition = this.props.arrowPosition === undefined ? 'outside' : this.props.arrowPosition;
    this.speed = this.props.speed === undefined ? 0.3 : this.props.speed;
    this.timing = this.props.timing === undefined ? 'ease-in' : this.props.timing;
    this.autoplay = this.props.autoplay === undefined ? false : this.props.autoplay;

    /* ======================================== Styling =========================================
     *  backwardButtonClass: classNames for the backwards button
     *  forwarrdButtonClass: classNames for the forwards button
     * ========================================================================================== */
    this.multipleContainerStyle = {
      width: this.multipleContainerWidth + this.widthSuffix,
      transition: 'left 0.3s ease-in',
      transitionProperty: 'left',
      transitionTimingFunction: this.timing,
      transitionDuration: this.speed + 's'
    }
    this.backwardButtonClass = 'backwardButtonCarousel' + (this.arrow ? '' : ' hideElement') + (' backwardButton-' + this.arrowPosition);
    this.forwardButtonClass = 'forwardButtonCarousel' + (this.arrow ? '' : ' hideElement') + (' forwardButton-' + this.arrowPosition);

    /* ==========================================================================================
     *  numWidth: gets the <Int> from this.props.width |~ Default: 100%
     *  numHeight: gets the <Int> from this.props.height |~ Default: 100%
     *  pos:
     *  slide:
     *  width:
     *  height:
     *  widthSuffix:
     *  heightSuffix:
     *  multipleContainerWidth:
     * ========================================================================================== */
    this.state = {
      pos: -this.width,
      slide: 0,
      translateX: 0,
    };
  } // end of constructor

  render() {
    let multipleContainerStateStyle = { 
      left: this.state.pos + this.widthSuffix,
      transition: this.state.transition,
      transform: 'translateX(' + this.state.translateX + '%)'
    };

    let multipleContainerStyle = {...this.multipleContainerStyle, ...multipleContainerStateStyle };

    let displayPosChild = [];
    for(var i = 0; i < this.props.children.length; i++) {
      displayPosChild.push(<div className='displayPosChild' key={i} />);
    }

    return (
      <div style={{position: 'relative'}}>
        <div className='carousel'>
          <div className={ this.backwardButtonClass } onClick={this.backward} />
          <div style={ multipleContainerStyle } className='multipleContainerCarousel'>
            <div style={{ width: this.props.width, height: this.props.height }} className='container'>
              { this.props.children[this.props.children.length - 1] }
            </div>
            {
              this.props.children.map((container, i) => {
                return (
                  <div className='container' key={i}>
                    { container }
                  </div>
                );
              })
            }
            <div style={{ width: this.props.width, height: this.props.height }} className='container'>
              { this.props.children[0] }
            </div>
          </div>
        </div>
        <div className={ this.forwardButtonClass } onClick={this.forward} />
        <div className='displayPos'>
          { displayPosChild }
        </div>
      </div>
    );
  } //end of render

  /* ==========================================================================================
   * Purpose: Handle the carousel moving forward resulting in a change in left & translateX properties
   *  @ Params: n/a
   *  @ Return: n/a
   *  @ Error: n/a 
   * Calculations:
   *  @ [(this.state.pos + (this.props.children.length * this.width)) % (this.props.children.length * this.width) === 0]
   *        |~> determines if the carousel is on the second last slide
   *  @ [prevState.translateX + ((100 / this.numSlides) * this.props.children.length)]
   *        |~> if second last slide, then add the size of slides (subtract 2 extra ones) to the translateX
   *  @ [pos: prevState.pos - this.width] |~> shifts the position to the left by 100% (width of the carousel)
   * ========================================================================================== */
  forward() {
    if((this.state.pos + (this.props.children.length * this.width)) % (this.props.children.length * this.width) === 0) {
      this.setState((prevState) => {
        return { translateX: prevState.translateX + ((100 / this.numSlides) * this.props.children.length) };
      });
    }

    this.setState((prevState) => {
      return { pos: prevState.pos - this.width };
    });
  } //end of forward

  /* ==========================================================================================
   * Purpose: Handle the carousel moving backwards resulting in a change in left & translateX properties
   *  @ Params: n/a
   *  @ Return: n/a
   *  @ Error: n/a 
   * Calculations:
   *  @ [(this.state.pos + this.width) % (this.props.children.length * this.width) === 0]
   *        |~> determines if the carousel is on the second slide
   *  @ [prevState.translateX + ((100 / this.numSlides) * this.props.children.length)]
   *        |~> if second last slide, then subtract the size of slides (subtract 2 extra ones) to the translateX
   *  @ [pos: prevState.pos + this.width] |~> shifts the position to the right by 100% (width of the carousel)
   * ========================================================================================== */
  backward() {
    if(((this.state.pos + this.width) % (this.props.children.length * this.width)) === 0) {
      this.setState((prevState) => {
        return { translateX: prevState.translateX - ((100 / this.numSlides) * this.props.children.length)};
      })
    }
    this.setState((prevState) => {
      return { pos: prevState.pos + this.width };
    })
  } //end of backward
} //end of Carousel Class