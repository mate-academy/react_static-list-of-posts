import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Comment({ name, body, email }) {
  return (
    <Fragment>
      <p className="post__comment">
        <span className="post__comment_name">
          {name}
        </span>
        <span className="post__comment_body">
          {body}
        </span>
        <p className="post__comment_email">
          {email}
        </p>
      </p>
    </Fragment>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
