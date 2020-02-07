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
    return (
      <div className="thick-bottom-border">
        <Form onSubmit={this.createPost} className="p-2">
          <Form.Group controlId="formCaption" className="mb-2">
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
          <Form.Group controlId="formHashtags" className="mb-2">
            <Form.Control
              name="hashtags"
              type="text"
              placeholder="#optional #additional #hashtags"
              value={this.state.hashtags}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <div className="pb-2">
            <FileUploader
              addFiles={this.addFiles}
              removeFile={this.removeFile}
              files={this.state.mediaUploads}
            />
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
            <div className={postOverCharLimitClass}>
              {charactersUsed} / {this.props.maxPostCharacters}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="">
              <InputGroup className="">
                <FormControl
                  value={this.state.templateName}
                  onChange={this.handleInputChange}
                  name="templateName"
                  placeholder="Template name"
                  aria-label="Template name"
                  aria-describedby="Template name"
                />
                <InputGroup.Append>
                  <Button
                    className="mr-2 "
                    variant="secondary"
                    onClick={this.savePostAsTemplate}
                  >
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <Button
              variant={postInThePast ? 'secondary' : 'primary'}
              type="submit"
              className="rounded-pill"
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
