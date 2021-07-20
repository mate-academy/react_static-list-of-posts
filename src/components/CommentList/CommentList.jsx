import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export function CommentList({ comments }) {
  return (
    <div className="post__comments">
      <p className="post__counter">
        {`Comments: ${comments.length}`}
      </p>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <Comment
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        </div>
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
