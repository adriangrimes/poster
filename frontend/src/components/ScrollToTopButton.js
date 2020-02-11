import React from 'react';

export default class ScrollToTopButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount = () => {
    document.addEventListener(
      'scroll',
      this.throttle(this.toggleVisibility, 100)
    );
  };
  componentWillUnmount = () => {
    document.removeEventListener(
      'scroll',
      this.throttle(this.toggleVisibility, 100)
    );
  };

  throttle = (functionToCall, wait) => {
    let time = Date.now();
    return () => {
      if (time + wait - Date.now() < 0) {
        functionToCall();
        time = Date.now();
      }
    };
  };

  toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    const { isVisible } = this.state;
    return (
      isVisible && (
        <img
          className="scroll-to-top"
          onClick={this.scrollToTop}
          src="assets/icons/up.svg"
          alt="Scroll to top"
          aria-hidden="true"
        />
      )
    );
  }
}
