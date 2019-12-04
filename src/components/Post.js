import React from 'react';
import PropTypes from 'prop-types';
import Users from './User';
import CommentsList from './CommentList';

// eslint-disable-next-line react/prop-types
function Post({ post }) {
  return (
    <div className="post__block">
      <Users author={post.author} />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="post__block-comments-counter">
        {`Comments: ${post.postComments.length}`}
      </div>
      <CommentsList comments={post.postComments} />
    </div>
  );
}

Post.propType = { post: PropTypes.object.isRequired };

export default Post;
