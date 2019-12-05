import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <>
    <h3 className="post__comments--name">{comment.name}</h3>
    <p>{comment.body}</p>
    <p className="comments__text">
      Comments by&nbsp;
      <a href={comment.email} className="link">
        {comment.email}
      </a>
    </p>
  </>
);

Comment.propTypes
  = {
    comment: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default Comment;
