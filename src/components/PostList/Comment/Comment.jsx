import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = props => (
  <div className="comment" key={props.commentInfo.id}>
    <div className="comment__name">
      {props.commentInfo.name}
    </div>
    <div className="comment__email">
      {props.commentInfo.email}
    </div>
    <div className="comment__text">
      {props.commentInfo.body}
    </div>
  </div>
);

Comment.propTypes = {
  commentInfo: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
