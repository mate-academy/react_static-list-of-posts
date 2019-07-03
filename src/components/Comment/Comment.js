import React from 'react';
import propTypes from 'prop-types';

const CommentComponent = props => (
  <li key={props.comment.id}>
    <h3>{props.comment.name}</h3>
    <p>{props.comment.body}</p>
    <p>{props.comment.email}</p>
  </li>
);
CommentComponent.propTypes = {
  comment: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    body: propTypes.string,
    email: propTypes.string,
  }).isRequired,
};
export default CommentComponent;
