import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentsList = ({ list }) => (
  <div>
    {list.map(item => (
      <Comment comment={item} />
    ))}
  </div>
);

CommentsList.propTypes
  = {
    list: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default CommentsList;
