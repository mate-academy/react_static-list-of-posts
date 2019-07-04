import React from 'react';
import PropTypes from 'prop-types';

function Comment({ commentData }) {
  return (
    <div className="comment-list__comment">
      <p>
        <span>
          Comment
          {` ${commentData.id}` }
        </span>
        {` ${commentData.name}`}
      </p>
      <div>
        {commentData.body}
      </div>
      <p>
        {commentData.email}
      </p>
    </div>
  );
}

Comment.propTypes = {
  commentData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
