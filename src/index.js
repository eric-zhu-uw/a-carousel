import React from 'react';

var styles = {
  carousel: {
    // display: 'flex',
    // flexFlow: 'row wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
    overflow: 'hidden'
  },

  container: {
    display: 'inline-block',
    position: 'relative',
    // overflow: 'hidden',
    // top: '0',
    // left: '0',
    // zIndex: '20',
  },
  forwardButton: {
    width: '30px',
    height: '30px',
    backgroundColor: 'black',
  },
  backwardButton: {
    width: '30px',
    height: '30px',
    backgroundColor: 'black'
  },
};

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    console.log('HEIGHT', this.props.height);
    console.log('WIDTH', this.props.width);
    console.log('MAX', this.props.max);
    this.forward = this.forward.bind(this);
    this.backward = this.backward.bind(this);

    this.state = {
      multipleContainerBundle: Object.assign({width: (this.props.children.length * 100) + '%', position: 'relative'})
    }

    this.carouselBundle = {};
    this.containerBundle = {};

  }

  forward() {
    console.log('forward');
    console.log('WIDTH', this.props.width);
    console.log('LENGTH', this.props.children.length);
    this.setState((prevState) => {
      return { multipleContainerBundle: Object.assign(prevState.multipleContainerBundle, {left: '-' + this.props.width}) };
    })
  }

  backward() {
    console.log('backward');
  }

  render() {
    if (this.props.max === 'yes') {
      this.carouselBundle = Object.assign(styles.carousel, { width: '100%' }, { height: '100%' });
      this.containerBundle = Object.assign(styles.container, { width: (100 / this.props.children.length) + '%' });
    } else {
      this.containerBundle = Object.assign(
        styles.container,
        { width: this.props.width },
        { height: this.props.height },
      );
      this.carouselBundle = Object.assign(
        styles.carousel,
      )
    }
    console.log('STATE', this.state);
    return (
      <div>
        <div style={styles.backwardButton} onClick={this.backward} />
        <div style={this.carouselBundle} className='carouselBundle'>
          <div style={this.state.multipleContainerBundle} className='multipleContainerBundles'>
            {
              this.props.children.map((container) => {
                return (
                  <div style={this.containerBundle} className='containerBundle'>
                    {container}
                  </div>
                );
              })
            }
          </div>
        </div>
        <div style={styles.forwardButton} onClick={this.forward} />
      </div>
    );
  }
}
