import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ commentList }) => (
  <>
    {commentList.map(comment => (
      <div className="comment" key={comment.id}>
        <Comment {...comment} />
      </div>
    ))}
  </>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};

CommentList.defaultProps = {
  commentList: [],
};
