import React from 'react';
import PropTypes from 'prop-types';
import './Commentlist.scss';

export const CommentList = ({ name, body, email }) => (
  <li className="comment">
    <p>{body}</p>
    <div className="comment__author">
      <p>{name}</p>
      <a href={`mailto: ${email}`}>{email}</a>
    </div>
  </li>
);

CommentList.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
