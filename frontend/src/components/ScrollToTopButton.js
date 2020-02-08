import React from 'react';

export default class ScrollToTopButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount = () => {
    var scrollComponent = this;
    document.addEventListener('scroll', function(e) {
      scrollComponent.toggleVisibility();
    });
  };

  toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
      <div>
        {isVisible && (
          <img
            className="scroll-to-top"
            src="up.svg"
            alt="Scroll to top"
            onClick={this.scrollToTop}
          />
        )}
      </div>
    );
  }
}
