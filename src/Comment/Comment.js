import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  const { name, email, body } = comment;
  const commentName = `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;

  return (
    <div className="comment">
      <h3 className="comment__title">{commentName}</h3>
      <p className="comment__text">{body}</p>
      <p className="comment__email">
        <span>By </span>
        {email}
      </p>
    </div>
  );
};

const commentPropsType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  body: PropTypes.string,
  email: PropTypes.string,
}).isRequired;

Comment.propTypes = {
  comment: commentPropsType.isRequired,
};

export default Comment;
