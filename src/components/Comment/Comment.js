import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

export function Comment(props) {
  const { name, email, body } = props.comment;

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
