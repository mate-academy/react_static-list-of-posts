import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export function CommentList({ commentsData }) {
  return (
    <div className="comments-data">
      <ul>
        {commentsData.map(comment => (
          <li key={comment.id}>
            <Comment {...comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

CommentList.propTypes = {
  commentsData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })).isRequired,
};
