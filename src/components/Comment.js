import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body, email }) => (
  <>
    <p className="post__comment-title">
      <b>
        {name}
      </b>
    </p>
    <p className="post__comment-answer">
      {body}
    </p>
    <a href={`mailto: ${email}`}>
      {email}
    </a>
  </>
);

export default Comment;

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
