import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <article className="container">
    <p className="pcomment">
      {comment.body}
    </p>
    <div className="commentname">
      <span className="li">
        {comment.name}
      </span>
      <a href="{comment.email}" className="link">
        {comment.email}
      </a>
    </div>
  </article>
);

Comment.propTypes = { comment: PropTypes.objectOf(PropTypes.any).isRequired };

export default Comment;
