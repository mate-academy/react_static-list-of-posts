import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './CommentsList.scss';

const CommentsList = props => (
  <div className="commentsList">
    {
      props.list.map(
        comment => <Comment commentInfo={comment} key={comment.id} />,
      )
    }
  </div>
);

CommentsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default CommentsList;
