import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ dataComment }) => (
  <pre className="App__comment">
    <p>Comment:</p>
    <p>{dataComment.body}</p>
  </pre>
);

Comment.propTypes = {
  dataComment: PropTypes.shape({
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
