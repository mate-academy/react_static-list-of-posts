import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import './PostComments.css';

const PostComments = props => (
  <ul className="comments">
    <h4 className="comments__title">Comments:</h4>
    {props.comments.map(comment => <Comment {...comment} />)}
  </ul>
);

PostComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostComments;
