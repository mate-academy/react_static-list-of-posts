import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentList = ({ allComments }) => (
  allComments.map(item => (
    <Comment commentItem={item} />
  ))
);

CommentList.propTypes = {
  allComments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
