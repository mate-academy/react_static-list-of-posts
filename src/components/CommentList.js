import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Comment item={item} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
