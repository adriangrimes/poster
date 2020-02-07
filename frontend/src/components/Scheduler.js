import React from 'react';
import { AccountContext } from './AccountContext';

import DashboardLayout from './DashboardLayout';
import PostCreator from './PostCreator';
import PostList from './PostList';
import TemplateManager from './TemplateManager';
import PostTemplate from './PostTemplate';

// Demo posts
import DemoPosts from './DemoPosts';

export default class Scheduler extends React.Component {
  constructor(props) {
    super(props);

    this.nowLineSeparator = { nowLine: true, datetime: new Date() };
    this.state = {
      postTemplates: [],
      templateToApply: null,
      // add demo posts
      scheduledPosts: [this.nowLineSeparator, ...DemoPosts]
    };
  }

  componentDidMount = () => {
    this.postCheckInterval = setInterval(() => {
      this.checkAndUpdatePostStatus();
    }, 5000);
  };
  componentWillUnmount = () => {
    clearInterval(this.postCheckInterval);
  };

  checkAndUpdatePostStatus = () => {
    // update current time bar location
    this.nowLineSeparator.datetime = new Date();
    // and change display of no longer pending posts
    const scheduledPosts = this.state.scheduledPosts
      .map(post => {
        if (post.datetime < new Date()) {
          post.pendingPost = false;
        }
        return post;
      })
      .sort((a, b) => a.datetime - b.datetime);
    this.setState({
      scheduledPosts: scheduledPosts
    });
  };

  addScheduledPost = postState => {
    const scheduledPosts = []
      .concat(this.state.scheduledPosts)
      .concat(postState)
      .sort((a, b) => a.datetime - b.datetime);
    this.setState({
      scheduledPosts: scheduledPosts,
      templateToApply: null
    });
  };

  deleteScheduledPost = id => {
    this.setState({
      scheduledPosts: this.state.scheduledPosts.filter(
        post => post.uniqueId !== id
      )
    });
  };

  addPostTemplate = template => {
    this.setState({ postTemplates: [...this.state.postTemplates, template] });
  };

  applyPostTemplate = template => {
    this.setState({ templateToApply: template });
  };

  removePostTemplate = id => {
    this.setState({
      postTemplates: this.state.postTemplates.filter(
        template => template.uniqueId !== id
      )
    });
  };

  render() {
    return (
      <DashboardLayout
        menuBarExtras={
          <TemplateManager>
            {this.state.postTemplates.map(template => (
              <PostTemplate
                template={template}
                key={template.uniqueId}
                removePostTemplate={this.removePostTemplate}
                applyPostTemplate={this.applyPostTemplate}
              />
            ))}
          </TemplateManager>
        }
        contentHeader="Your scheduled posts"
      >
        <PostCreator
          maxPostCharacters={280}
          maxUploads={4}
          createPost={this.addScheduledPost}
          createPostTemplate={this.addPostTemplate}
          templateToApply={this.state.templateToApply}
        />
        <PostList
          scheduledPosts={this.state.scheduledPosts}
          deleteScheduledPost={this.deleteScheduledPost}
          social={this.context.social}
        />
      </DashboardLayout>
    );
  }
}

Scheduler.contextType = AccountContext;
