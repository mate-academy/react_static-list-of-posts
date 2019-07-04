import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => (
  <>
    <div>{props.comment.body}</div>
    <div>
      name:
      {props.comment.name}
    </div>
    <div>
      mail:
      {props.comment.email}
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
