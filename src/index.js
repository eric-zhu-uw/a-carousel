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
    if(this.props.children.length === undefined) {
      throw 'Error 1: Must enter 2 or more children within the Carousel Component!';
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
     *  arrow: Enable the next and previous buttons
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
      transition: 'left 0.5s',
      translateX: 0,
    };
  } // end of constructor

  render() {
    let multipleContainerStyle = { left: this.state.pos + this.widthSuffix, width: this.multipleContainerWidth + this.widthSuffix, transition: this.state.transition, transform: 'translateX(' + this.state.translateX + '%)' };
    let displayPosChild = [];
    for(var i = 0; i < this.props.children.length; i++) {
      displayPosChild.push(<div className='displayPosChild' key={i} />);
    }


    return (
      <div>
        <div className='backwardButton' onClick={this.backward} />
        <div className='carousel'>
          <div style={ multipleContainerStyle } className='multipleContainer'>
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
        <div className='forwardButton' onClick={this.forward} />
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