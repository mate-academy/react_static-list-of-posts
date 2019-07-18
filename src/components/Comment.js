import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <>
    <div>{comment.body}</div>
    <div>
      name:
      {comment.name}
    </div>
    <div>
      mail:
      {comment.email}
    </div>
    <h7> - - - - - - - -</h7>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
export default Comment;
