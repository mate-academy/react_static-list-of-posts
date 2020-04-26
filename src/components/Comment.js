import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <>
    <div className="comment comments__item">
      <p className="comment__name">
        {name}
      </p>
      <p className="comment__body">
        {body}
      </p>
      <a href={`mailto:${email}`} className="comment__email">
        {email}
      </a>
    </div>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
