import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => (
  <li className="comment">
    <h4>{props.name}</h4>
    <a href={`mailto:${props.email}`}>
      {props.email}
    </a>
    <p>{props.body}</p>
  </li>
);

Comment.defaultProps = {
  name: 'guest',
  email: 'no email',
};

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string.isRequired,
};

export default Comment;
