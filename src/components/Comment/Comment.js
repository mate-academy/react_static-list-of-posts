import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="comment">
      <h4 className="comment__name">
        {name}
      </h4>
      <div className="comment__email">
        {email}
      </div>
      <p className="comment__body">{body}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
