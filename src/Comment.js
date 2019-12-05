import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <li className="comment">
    <p className="comment__part--name">{comment.name}</p>
    <p className="comment__part">{comment.email}</p>
    <p className="comment__part">{comment.body}</p>
  </li>
);

Comment.propTypes
  = { comment: PropTypes.objectOf(PropTypes.string).isRequired };

export default Comment;
