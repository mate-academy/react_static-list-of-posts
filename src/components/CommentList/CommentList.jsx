import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment/Comment';
import '../CommentList/commentList.scss';

const CommentList = ({ comments }) => (
  <div className='commentList'>
    <h2 className='commentList__title'>Coments</h2>
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
