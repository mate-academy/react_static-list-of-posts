import React from 'react';
import propTypes from 'prop-types';

import './Comment.css';

const Comment = ({ item }) => (

  <div className="comment">
    <h3>{item.name}</h3>
    <a href={`mailto:${item.email}`}>{item.email}</a>
    <p>{item.body}</p>
  </div>
);

export default Comment;

Comment.propTypes = {
  // eslint-disable-next-line react/require-default-props
  item: propTypes.arrayOf(propTypes.string),
};
