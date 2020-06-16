import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => (
  <li className="comment">
    <div>
      <h4 className="comment__title">{props.name}</h4>
      <a href={`mailto:${props.email}`} className="comment__email">
        <small>{props.email}</small>
      </a>
    </div>
    <p className="comment__message">{props.body}</p>
  </li>
);

export { Comment };

Comment.defaultProps = {
  name: 'guest',
  email: 'no email',
};

Comment.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  body: PropTypes.string.isRequired,
};
