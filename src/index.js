import React from 'react';

/* TO DO LIST
1. Make it so it so it's optimized for React Production
1. Remove comments and uglify the JS file

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
    if((isNaN(this.props.speed) && this.props.speed !== undefined) || this.props.speed <= 0) {
      throw new Error('[3] - Must enter a number > 0 for the <speed> property');
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

     // Purpose: Check autoplaySpeed property that it is a number >= 0 or undefined
    if((isNaN(this.props.autoplaySpeed) && this.props.autoplaySpeed !== undefined) || this.props.autoplaySpeed <= 0) {
      throw new Error('[6] - Must enter a number > 0 for the <autoplaySpeed> property');
    }


    // Purpose: Check arrowPosition property that is a string or undefined
    if(typeof(this.props.arrowPosition) !== 'string' && this.props.arrowPosition !== undefined) {
      throw new Error('[7] - Must enter a valid string value from documentation for the <arrowPosition> property');
    }

    // Purpose: Check arrowPosition property that it is a a valid property according to the documentation
    const arrowPositionRegex = new RegExp(/^outside|inside|bottom|below$/);
    if(typeof(this.props.arrowPosition) === 'string' && !this.props.arrowPosition.match(arrowPositionRegex)) {
      throw new Error('[7] - Must enter a valid string value from documentation for the <arrowPosition> property')
    }


    // Purpose: Check arrowStyleForward property that it is a string or undefined
    if(typeof(this.props.arrowStyleBackward) !== 'string' && this.props.arrowStyleBackward !== undefined) {
      throw new Error('[8] - Must enter a string value for the <arrowStyleBackward> property');
    }


    // Purpose: Check arrowStyleForward property that it is a string or undefined
    if(typeof(this.props.arrowStyleForward) !== 'string' && this.props.arrowStyleForward !== undefined) {
      throw new Error('[9] - Must enter a string value for the <arrowStyleForward> property');
    }

    // Purpose: Check dots property that it is a boolean or undefined
    if(typeof(this.props.dots) !== 'boolean' && this.props.dots !== undefined) {
      throw new Error('[10] - Must enter a boolean value for the <dots> property');
    }

    // Purpose: Check dotsClick property that it is a boolean or undefined
    if(typeof(this.props.dotsClick) !== 'boolean' && this.props.dotsClick !== undefined) {
      throw new Error('[11] - Must enter a boolean value for the <dotsClick> property');
    }

    // Purpose: Check initialSlide property that it is a number or undefined
    if(typeof(this.props.initialSlide) !== 'number' && this.props.initialSlide !== undefined) {
      throw new Error('[12] - Must enter a (int) number between 0 and (#slides - 1) for the <initialSlide> property');
    }

    // Purpose: Check initialSlide property if its between [0 ... (#slides - 1)] and if it's an integer
    if(typeof(this.props.initialSlide) === 'number' && (!Number.isInteger(this.props.initialSlide) || this.props.initialSlide < 0 || this.props.initialSlide >= this.props.children.length)) {
      throw new Error('[12] - Must enter a (int) number between 0 and (#slides - 1) for the <initialSlide> property');
    }

    //check more props here
    /* ========================================================================================== */

    /* ==========================================================================================
     *  forward: Keep context of <this> forward() function in the class regardless of invocation location
     *  backward: Keep context of <this> backward() function in the class regardless of invocation location
     *  numSlides: Total number of slides: this.props.children.length + 2
     *  multipleContainerWidth: The total size of the slides: this.numSlides * 100 (in proportion to carousel-size)
     *  width: always 100 (can be updated later for more functionalities)
     *  height: always 100 (can be updated later for more functionalities)
     *  widthSuffix: always % (can be updated later for more functionalities)
     *  heightSuffix: always % (can be updated later for more functionalities)
     *
     *  arrow: Enable the next and previous buttons
     *    ~| type: boolean | default: true |
     *
     *  arrowPosition: the positioning of the navigation arrows
     *    ~| type: string | default: 'outside' |
     *
     *  arrowStyleBackward: the classname of the backwards navigation arrow
     *    ~| type: string | default: 'default' |
     *
     *  arrowStyleForward: the classname of the forwards navigation arrow
     *    ~| type: string | default: 'default' |
     *
     *  autoplay: Enable automatic scrolling of slides
     *    ~| type: boolean | default: false |
     *
     *  autoplaySpeed: the speed in (s) in which the slider automatically changes
     *    ~| type: string | default: 3 |
     *
     *  speed: the speed in (s) in which the silder changes
     *    ~| type: number | default: 0.3seconds |
     *
     *  timing: the type of transition style based of CSS property transition-timing-function
     *    ~| type: string | default: 'ease-in' |
     *  dots: Enable the nagivation dots
     *    ~| type: boolean | default: true |
     *  dotsClick: Enable if you can navigate slides with the navigation dots
     *    ~| type: boolean | default: true |
     *  initialSlide: Determine which slide will be displayed first
     *    ~| type: number | default: 0 |
     * ========================================================================================== */
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.moveSlide = this.moveSlide.bind(this);
    this.autoplayCarousel = this.autoplayCarousel.bind(this);
    this.numSlides = this.props.children.length + 2;
    this.multipleContainerWidth = this.numSlides * 100;
    this.width = 100;
    this.height = 100;
    this.widthSuffix = '%';
    this.heightSuffix = '%';
    this.arrow = this.props.arrow === undefined ? true : this.props.arrow;
    this.arrowPosition = this.props.arrowPosition === undefined ? 'outside' : this.props.arrowPosition;
    this.arrowStyleBackward = this.props.arrowStyleBackward === undefined ? 'default' : this.props.arrowStyleBackward;
    this.arrowStyleForward = this.props.arrowStyleForward === undefined ? 'default' : this.props.arrowStyleForward;
    this.autoplay = this.props.autoplay === undefined ? false : this.props.autoplay;
    this.autoplaySpeed = this.props.autoplaySpeed === undefined ? 3000 : this.props.autoplaySpeed * 1000;
    this.speed = this.props.speed === undefined ? 0.3 : this.props.speed;
    this.timing = this.props.timing === undefined ? 'ease-in' : this.props.timing;
    this.dots = this.props.dots === undefined ? true : this.props.dots;
    this.dotsClick = this.props.dotsClick === undefined ? true : this.props.dotsClick;
    this.initialSlide = this.props.initialSlide === undefined ? 0 : this.props.initialSlide;

    /* ======================================== Styling =========================================
     *  backwardButtonClass: classNames for the backwards button
     *  forwarrdButtonClass: classNames for the forwards button
     *  dotsClass: classNames for the navigation dots
     * ========================================================================================== */
    this.multipleContainerStyle = {
      width: this.multipleContainerWidth + this.widthSuffix,
      transition: 'left 0.3s ease-in',
      transitionProperty: 'left',
      transitionTimingFunction: this.timing,
      transitionDuration: this.speed + 's'
    }
    this.backwardButtonClass = `backwardButtonCarousel ${this.arrow ? '' : 'hideElement'} ${'backwardButton-' + this.arrowPosition} ${this.arrowStyleBackward === 'default' ? 'backwardButtonStyle' : this.arrowStyleBackward}`;
    this.forwardButtonClass = `forwardButtonCarousel ${this.arrow ? '' : 'hideElement'} ${'forwardButton-' + this.arrowPosition} ${this.arrowStyleForward === 'default' ? 'forwardButtonStyle' : this.arrowStyleForward}`;
    this.dotsClass = `dotsCarousel ${this.dots ? '' : 'hideElement'}`;
    
    /* ==========================================================================================
     *  pos:
     *  slide:
     *  translateX:
     * ========================================================================================== */
    this.state = {
      pos: -this.width * (this.initialSlide + 1),
      slide: this.initialSlide,
      translateX: 0,
    };
  } // end of constructor

  componentDidMount() {
    if(this.autoplay) {
      this.autoplayCarousel();
    }
  }

  render() {
    let multipleContainerStateStyle = { 
      left: this.state.pos + this.widthSuffix,
      transition: this.state.transition,
      transform: 'translateX(' + this.state.translateX + '%)'
    };

    let multipleContainerStyle = {...this.multipleContainerStyle, ...multipleContainerStateStyle };

    let displayPosChild = [];
    for(var i = 0; i < this.props.children.length; i++) {
      let moveSlide = this.moveSlide.bind(this, i);
      displayPosChild.push(<div className='dotsChildren' key={i} onClick={ moveSlide } />);
    }

    return (
      <div style={{position: 'relative'}}>
        <div className='carousel'>
          <button className={ this.backwardButtonClass } onClick={this.backward} />
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
        <button className={ this.forwardButtonClass } onClick={this.forward} />
        <div className={this.dotsClass}>
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
        return {
          translateX: prevState.translateX + ((100 / this.numSlides) * this.props.children.length),
          slide: -1
        };
      });
    }

    this.setState((prevState) => {
      return {
        pos: prevState.pos - this.width,
        slide: prevState.slide + 1
      };
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
        return {
          translateX: prevState.translateX - ((100 / this.numSlides) * this.props.children.length),
          slide: this.props.children.length
        };
      })
    }
    this.setState((prevState) => {
      return {
        pos: prevState.pos + this.width,
        slide: prevState.slide - 1
      };
    })
  } //end of backward

  /* ==========================================================================================
   * Purpose: Move the slide to the correct position depending on which dot on the dot navigation
   *          is clicked
   *  @ Params: slide [int] -> the slide the carousel should move to
   *  @ Return: n/a
   *  @ Error: n/a
   * ========================================================================================== */
  moveSlide(slide) {
    if(this.dotsClick) {
      if(slide < this.state.slide) {  //back by how much smaller
        let numBackward = this.state.slide - slide;
        this.setState((prevState) => {
          return {
            pos: prevState.pos +(numBackward * this.width),
            slide: prevState.slide - (numBackward * 1)
          };
        });
        return;
      }

      if(slide > this.state.slide) {  //forward by how much larger
        let numForward = slide - this.state.slide;
        this.setState((prevState) => {
          return {
            pos: prevState.pos - (numForward * this.width),
            slide: prevState.slide + (numForward * 1)
          };
        });
        return;
      }
    }
  }

  /* ==========================================================================================
   * Purpose: If the autoplay property is selected, this function will execute on an interval basis
   *          based of the autplaySpeed property
   * @ Params: n/a
   * @ Return: n/a
   * @ Error: n/a
   * ========================================================================================== */
  autoplayCarousel() {
    setInterval(() => { this.forward(); }, this.autoplaySpeed);
  }
} //end of Carousel Class



