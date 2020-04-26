import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
  comments.map(item => <Comment comment={item} key={item.id} />)
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default CommentList;
