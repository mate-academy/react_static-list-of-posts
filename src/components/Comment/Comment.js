import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export function Comment(comment) {
  const { name, email, body } = comment.comment;

  return (
    <>
      <p>
        <span className="name">
          {name}
        </span>
        {` email:${email}`}
      </p>
      <p>
        {body}
      </p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }),
};

Comment.defaultProps = {
  comment: {
    name: 'USERNAME',
    email: 'USEREMAIL',
    body: 'SOMECOMMENT',
  },
};
