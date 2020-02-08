import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import FileUploader from './FileUploader';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default class PostCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      hashtags: '',
      datetime: new Date(new Date().setSeconds(0)),
      mediaUploads: [],
      uniqueId: '',
      templateName: '',
      pendingPost: true
    };

    // posts cannot be further than 3 years in the future
    this.maxDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 3)
    );
  }

  componentDidUpdate(prevProps) {
    // if there is a template to apply, and there wasn't already a template...
    if (
      this.props.templateToApply &&
      this.props.templateToApply !== prevProps.templateToApply
    ) {
      // set the state to the template
      this.setState({ ...this.props.templateToApply });
    }
  }

  createPost = e => {
    e.preventDefault();
    let newState = {
      uniqueId: Math.random()
        .toString(36)
        .substr(2, 9)
    };
    // if chosen datetime is in the past, set to current datetime plus 1 second
    if (this.state.datetime < new Date())
      newState.datetime = new Date(new Date().getTime() + 1000);
    this.setState(newState, () => {
      // send a copy of the state
      this.props.createPost(Object.assign({}, this.state));
      this.setState({
        caption: '',
        hashtags: '',
        mediaUploads: []
      });
    });
  };

  savePostAsTemplate = () => {
    this.setState(
      {
        uniqueId: Math.random()
          .toString(36)
          .substr(2, 9)
      },
      () => {
        // create a new object with the component state
        this.props.createPostTemplate(Object.assign({}, this.state));
        this.setState({ templateName: '' });
      }
    );
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  addFiles = files => {
    if (
      this.state.mediaUploads.length + files.length <=
      this.props.maxUploads
    ) {
      this.setState({
        mediaUploads: [...this.state.mediaUploads, ...files]
      });
    } else {
      console.log('too many files');
    }
  };

  removeFile = file => {
    this.setState({
      mediaUploads: this.state.mediaUploads.filter(function(upload) {
        return upload.src !== file.src;
      })
    });
  };

  render() {
    const charactersUsed =
      this.state.caption.length + this.state.hashtags.length;
    const postOverCharLimitClass =
      charactersUsed > this.props.maxPostCharacters ? 'text-danger' : '';
    const postInThePast = new Date() > this.state.datetime;
    const postDisabled =
      charactersUsed > 0 && charactersUsed <= this.props.maxPostCharacters
        ? false
        : true;
    const templateAddDisabled = this.state.templateName.length < 1;
    return (
      <div className="p-2">
        <div className="d-flex flex-wrap justify-content-end align-items-center">
          <span className="mr-2 text-strong">Pick a date and time</span>
          <DateTimePicker
            required={true}
            value={this.state.datetime}
            onChange={datetime => {
              this.setState({ datetime: datetime });
            }}
            disableClock={true}
            maxDate={this.maxDate}
            minDetail="decade"
          />
        </div>
        <Form onSubmit={this.createPost}>
          <Form.Group controlId="formCaption" className="m-0 mt-2">
            <Form.Control
              name="caption"
              type="text"
              as="textarea"
              rows="3"
              placeholder="What would you like to post?"
              value={this.state.caption}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formHashtags" className="m-0 mt-2">
            <Form.Control
              name="hashtags"
              type="text"
              placeholder="#optional #additional #hashtags"
              value={this.state.hashtags}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <FileUploader
            addFiles={this.addFiles}
            removeFile={this.removeFile}
            files={this.state.mediaUploads}
            maxFiles={this.props.maxUploads}
            className="mt-2"
          />

          <div className="d-flex justify-content-between align-items-center">
            <InputGroup className="mt-2">
              <FormControl
                value={this.state.templateName}
                onChange={this.handleInputChange}
                name="templateName"
                placeholder="Template name"
                aria-label="Template name"
                aria-describedby="Template name"
                className="template-name-field"
              />
              <InputGroup.Append>
                <Button
                  variant="secondary"
                  disabled={templateAddDisabled}
                  onClick={this.savePostAsTemplate}
                >
                  <strong>+</strong>
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <div
              className={`char-limit-display text-center mx-2 mt-2 p-1 ${postOverCharLimitClass}`}
            >
              {charactersUsed} / {this.props.maxPostCharacters}
            </div>
            <Button
              variant={postInThePast ? 'secondary' : 'primary'}
              type="submit"
              disabled={postDisabled}
              className="rounded-pill mt-2"
            >
              <span className="d-inline-block text-nowrap">
                {postInThePast && 'Post now!'}
                {!postInThePast && 'Schedule!'}
              </span>
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
