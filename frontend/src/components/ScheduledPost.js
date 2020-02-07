import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

export default class ScheduledPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCaptionCopyTooltip: false,
      showHashtagCopyTooltip: false
    };

    this.captionInputRef = React.createRef();
    this.hashtagsInputRef = React.createRef();
  }

  componentWillUnmount = () => {
    this.setState(
      { showCaptionCopyTooltip: false, showHashtagCopyTooltip: false },
      () => {
        clearTimeout(this.captionTooltipTimeout);
        clearTimeout(this.hashtagTooltipTimeout);
      }
    );
  };

  captionClick = () => {
    this.setState({ showCaptionCopyTooltip: true });
    this.captionTooltipTimeout = setTimeout(() => {
      this.setState({ showCaptionCopyTooltip: false });
    }, 2000);
    this.copyText(this.captionInputRef);
  };

  hashtagsClick = () => {
    this.setState({ showHashtagCopyTooltip: true });
    this.hashtagTooltipTimeout = setTimeout(() => {
      this.setState({ showHashtagCopyTooltip: false });
    }, 2000);
    this.copyText(this.hashtagsInputRef);
  };

  copyText = ref => {
    let range = document.createRange();
    range.selectNodeContents(ref.current);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    sel.removeAllRanges();
  };

  render() {
    let images = [];
    if (this.props.post && this.props.post.mediaUploads) {
      images = this.props.post.mediaUploads.map(image => {
        return (
          <img
            className="upload-thumbnail rounded-lg m-1"
            src={image.src}
            height="50"
            width="50"
            alt={image.alt}
            key={image.src}
            onClick={e => {
              console.log('image clicked');
            }}
          />
        );
      });
    }
    return (
      <div
        className={`feed-post border-bottom p-2 ${
          this.props.post.pendingPost ? 'feed-post-gradient border-white' : ''
        }`}
      >
        <Button
          variant="default"
          className="delete-post-button m-1 p-1"
          onClick={() => this.props.deletePost(this.props.post.uniqueId)}
        >
          ✕
        </Button>
        <div className="d-flex">
          <div className="ml-2 pt-1">
            <img
              src="avatar.jpg"
              height="50"
              width="50"
              className="avatar rounded-circle"
              alt="Your avatar"
            />
          </div>
          <div className="mx-2 w-100">
            <strong>{this.props.socialUsername}</strong>&nbsp;
            <span className="text-muted">{this.props.socialHandle}</span>
            <p
              className={`m-0 pb-3 ${!this.props.post.pendingPost &&
                'text-muted'}`}
            >
              <span
                name="caption"
                className="caption"
                ref={this.captionInputRef}
                onClick={this.captionClick}
              >
                {this.props.post.caption}
              </span>
              <Overlay
                target={this.captionInputRef.current}
                show={this.state.showCaptionCopyTooltip}
                placement="top"
              >
                {props => (
                  <Tooltip id="caption-tooltip" {...props}>
                    Copied caption
                  </Tooltip>
                )}
              </Overlay>{' '}
              <span
                name="hashtags"
                className="hashtags"
                ref={this.hashtagsInputRef}
                onClick={this.hashtagsClick}
              >
                {this.props.post.hashtags}
              </span>
              <Overlay
                target={this.hashtagsInputRef.current}
                show={this.state.showHashtagCopyTooltip}
                placement="top"
              >
                {props => (
                  <Tooltip id="hashtag-tooltip" {...props}>
                    Copied hashtags
                  </Tooltip>
                )}
              </Overlay>
            </p>
            <div>{images}</div>
            <div className="text-right m-0">
              {!this.props.post.pendingPost && 'Posted '}
              {this.props.post.pendingPost &&
                'Posts ' +
                  moment(this.props.post.datetime).fromNow() +
                  ' – ' +
                  moment(this.props.post.datetime).format('ddd') +
                  ', '}
              {this.props.post &&
                this.props.post.datetime &&
                this.props.post.datetime.toLocaleDateString('default', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ScheduledPost.propTypes = {
  post: PropTypes.exact({
    caption: PropTypes.string.isRequired,
    hashtags: PropTypes.string,
    datetime: PropTypes.instanceOf(Date),
    mediaUploads: PropTypes.arrayOf(PropTypes.object),
    uniqueId: PropTypes.string,
    templateName: PropTypes.string,
    pendingPost: PropTypes.bool
  })
};
