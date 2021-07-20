import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

function Comment({ comment }) {
  const { name, email, body } = comment;

  return (
    <>
      <div className="post-coments">
        <h3 className="post-title">{`${name}`.toUpperCase()}</h3>
        <p>{`${body}`.toUpperCase()[0].substring(1)}</p>
        <p className="post-email">{`Email: ${email}`}</p>
      </div>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Comment;
