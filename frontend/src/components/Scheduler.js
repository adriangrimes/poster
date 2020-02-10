import React from 'react';
import { AccountContext } from './AccountContext';

import DashboardLayout from './DashboardLayout';
import PostCreator from './PostCreator';
import PostList from './PostList';
import PostTemplateManager from './PostTemplateManager';
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
    this.checkAndUpdatePostStatus();
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

  addScheduledPostAndSort = postState => {
    const scheduledPosts = [...this.state.scheduledPosts, postState].sort(
      (a, b) => a.datetime - b.datetime
    );
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
    this.setState({ templateToApply: template }, () => {
      this.setState({ templateToApply: null });
    });
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
        menuBarExtras={closeMenu => (
          <PostTemplateManager>
            {this.state.postTemplates.map(template => (
              <PostTemplate
                template={template}
                key={template.uniqueId}
                removePostTemplate={this.removePostTemplate}
                applyPostTemplate={this.applyPostTemplate}
                closeMenu={closeMenu}
              />
            ))}
          </PostTemplateManager>
        )}
        contentHeader="Post Scheduler"
      >
        <PostCreator
          maxPostCharacters={280}
          maxUploads={4}
          createPost={this.addScheduledPostAndSort}
          createPostTemplate={this.addPostTemplate}
          templateToApply={this.state.templateToApply}
        />
        <div className="d-flex align-items-center justify-content-start branded-gradient text-light m-0 border-bottom">
          <h6 className="m-0 pl-3 py-2">Your Posts</h6>
        </div>
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
