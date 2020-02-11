import React from 'react';
import ScheduledPost from './ScheduledPost';

export default function PostList({
  scheduledPosts,
  deleteScheduledPost,
  social
}) {
  const postsToRender = scheduledPosts.map((post, index) => {
    if (post.nowLine && scheduledPosts.length > 1) {
      return (
        <div
          key="now-line"
          className="now-line branded-gradient text-center text-light py-1 pb-2"
        >
          <small>
            {index + 1 < scheduledPosts.length && 'Next scheduled post ▼'}
            {index + 1 >= scheduledPosts.length && 'All posted!'}
          </small>
        </div>
      );
    } else if (scheduledPosts.length > 1) {
      return (
        <ScheduledPost
          key={post.uniqueId}
          post={post}
          deletePost={deleteScheduledPost}
          socialUsername={social.username}
          socialHandle={social.handle}
        />
      );
    }
    return null;
  });

  if (postsToRender.length > 1) {
    postsToRender.push(
      <div className="py-3 text-center text-muted" key="end-of-posts">
        End of scheduled posts
      </div>
    );
    return postsToRender;
  } else {
    return <div className="py-3 text-center text-muted">Add a post above</div>;
  }
}
