import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';
import './CommentList.css';

const CommentList = ({ postComments }) => (
  <ul className="Post__Comment-List">
    { postComments.map(
      comment => <Comment key={comment.id} comment={comment} />,
    ) }
  </ul>
);

export default CommentList;

CommentList.propTypes = {
  postComments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
