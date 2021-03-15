import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentsList.scss';

const CommentsList = ({ list }) => (
  <div className="commentsList">
    {
      list.map(comment => <Comment comments={comment} />)
    }
  </div>
);

CommentsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default CommentsList;
