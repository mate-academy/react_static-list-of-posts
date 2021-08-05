import React from 'react';
import PropTypes from 'prop-types';

import './Comments.css';
import { TypeComment } from '../types';

export const Comments = ({ list }) => (
  <div className="comments">
    <h2 className="comments-header">Comments</h2>
    {
      list.map(comment => (
        <div className="comment">
          <div className="comment-author">
            <span className="author-name">{comment.name}</span>
            <span className="author-email">{comment.email}</span>
          </div>

          <div className="comment-body">
            {comment.body}
          </div>
        </div>
      ))
    }
  </div>
);

Comments.propTypes = {
  list: PropTypes.arrayOf(
    TypeComment.isRequired,
  ).isRequired,
};
