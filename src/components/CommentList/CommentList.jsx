import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  <div>
    <h2>Coments</h2>
    {comments.map(comment => <Comment {...comment} key={comment.id} />)}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CommentList;
