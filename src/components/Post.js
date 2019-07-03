import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import CommentList from './CommentList';

function Post(props) {
  return (
    <li className="post-list__post">
      <h2 className="post-list__post-title">{props.post.title}</h2>
      <p className="post-list__post-text">{props.post.body}</p>

      <User user={props.post.user} />
      <CommentList comments={props.post.comments} />
    </li>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Post;
