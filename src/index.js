import React from 'react';

var styles = {
  carousel: {
    overflow: 'hidden'
  }
};

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    //KEEP ADDING MORE TEST CASES HERE

    // validation of width and height and whether or not they are valid units
    /* ==========================================================================================
     *  forward: 
     *  backward: 
     *  numSlides:
     *  multipleContainerWidth:
     * ========================================================================================== */
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);
    this.numSlides = this.props.children.length + 2;
    this.multipleContainerWidth = this.numSlides * 100;
    this.width = 100;
    this.height = 100;


    let tempWidth = this.props.width ? this.props.width : '100%';
    let tempHeight = this.props.height ? this.props.height : '100%';

    this.containerStyle = { width: this.props.width, height: this.props.height };
    this.container = {};

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
      numWidth: parseInt(tempWidth),
      numHeight: parseInt(tempHeight),
      pos: -parseInt(tempWidth),
      slide: 0,
      width: tempWidth,
      height: tempHeight,
      widthSuffix: this.validateWH(tempWidth),
      heightSuffix: this.validateWH(tempHeight),
      // multipleContainerWidth: this.numSlides * 100,
      transition: 'left 0.5s',
      translateX: 0,
    };
  }


  // NEED TO WRITE something about how to arrange the containers so that to the right, there is always
  // the first couple children so it can always scroll smoothly in the correct direction
  // possible solution...?
  //    2. one extra one... the first one is also appended onto the end @ all times based off this.props.children[this.state.slide]
  //    3. ...

  render() {
    let multipleContainerStyle = { left: this.state.pos + this.state.widthSuffix, width: this.multipleContainerWidth + '%', transition: this.state.transition, transform: 'translateX(' + this.state.translateX + '%)' };
    // var containerStyle = [];
    // for(var i = 0; i < this.props.children.length; i++) {
    //   containerStyle.push({ width: this.props.width, height: this.props.height });
    // }

    let displayPosChild = [];
    for(var i = 0; i < this.props.children.length; i++) {
      displayPosChild.push(<div className='displayPosChild' />);
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
  }

  // onclick forward button that will move the multiple container { left: this.state.pos - this.props.width }
  forward() {
    console.log(this.state.pos);
    console.log(this.multipleContainerWidth - (2 * this.width));
    console.log(this.state.pos + (this.multipleContainerWidth - (2 * this.width)), this.state.pos + (this.multipleContainerWidth - (2 * this.width)) < 0);
    console.log((this.state.pos + (this.multipleContainerWidth - (2 * this.width))) % ((this.props.children.length - 1) * this.width) === 0);
    if((this.state.pos + (this.multipleContainerWidth - (2 * this.width))) <= 0 && (this.state.pos + (this.multipleContainerWidth - (2 * this.width))) % ((this.props.children.length) * this.width) === 0) {
      // reset the pos value to the correct value...
      console.log('SECOND LAST SLIDE');
      this.setState((prevState) => {
        return { translateX: prevState.translateX + (100 - (100 / this.numSlides) * 2) };
      });
    }

    this.setState((prevState) => {
      return { pos: prevState.pos - prevState.numWidth };
    });
  }

  // onclick backward button that will move the multple container { left: this.state.pos + this.props.width }
  backward() {
    if(this.state.pos ===  -this.state.numWidth) {
      // reset the pos value to the correct value...
      this.setState({ pos: -(this.multipleContainerWidth - (3 * this.state.numWidth)) })
    }
    this.setState((prevState) => {
      return { pos: prevState.pos + prevState.numWidth };
    })
  }

  /* ==========================================================================================
   * Purpose: To validate that a valid unit of measurement was used for the width or height props
   *  @ Params: [str: String] - the css value for width: // height:
   *  @ Return: [suffix[]: String ] - an element of suffix
   *  @ Error: [1] the str did not contain any of the valid suffices 
   * Example: 
   *  validateWH('10px') ~> 'px'
   *  validateWH('39%') ~> '%'
   *  validateWH('39xxx') ~> ERROR 1
   * ========================================================================================== */
  validateWH(str) {
    let suffix = ['px', '%', 'em', 'vw', 'vh', 'rem'];
    for(let i = 0; i < suffix.length; i++) {
      if (str.endsWith(suffix[i])) {
        return suffix[i];
      }
    }
    throw 'Error 1: Did not enter a valid unit of measurement for width or height';
  }
}
