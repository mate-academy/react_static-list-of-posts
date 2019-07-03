import React from 'react';

import PropTypes from 'prop-types';

const Comment = props => (
  <div>
    <div className="comment-writer">
      <b>
        {props.comment.name}
      </b>
      <span>
        <i>
          (email:
          {props.comment.email}
          )
        </i>

      </span>
    </div>
    <p className="comment-body">{props.comment.body}</p>
    <p>--- --- ---</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
    postId: PropTypes.number,
  }).isRequired,
};

export default Comment;
