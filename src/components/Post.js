import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Comments from './Comments';

import comments from '../api/comments';

const Post = ({ title, body, user }) => (
  <li className="post-card">
    <br />
    <strong>{title}</strong>
    <p>{body}</p>
    <User user={user} />
    <p className="comment">
      <span className="comments__heading">Comments: </span>
      {comments.map(comment => (
        <Comments {...comment} key={comment.id} />
      ))}
    </p>
  </li>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default Post;
