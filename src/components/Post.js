import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import CommentList from './CommentList';

export default function Post({ post }) {
  return (
    <div className="post-container">
      <div>POST EPT</div>
      <div className="post">
        <div className="post__title">
          {post.title}
        </div>
        <div className="post__body">
          {post.body}
        </div>
      </div>
      <User user={post.user} />
      <CommentList commentList={post.coments} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.instanceOf(Object).isRequired,
};
