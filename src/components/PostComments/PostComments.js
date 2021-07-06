import React from 'react';
import { ShapePostComments } from '../Shapes';
import { Comment } from '../Comment/Comment';
import './PostComments.css';

const PostComments = props => (
  <ul className="comments">
    <h4 className="comments__title">Comments:</h4>
    {props.comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </ul>
);

PostComments.propTypes = ShapePostComments.isRequired;

export default PostComments;
