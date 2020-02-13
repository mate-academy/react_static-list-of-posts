import React from 'react';
import './Comments.css';
import PropTypes from 'prop-types';

export const Comments = ({ body, commentAuthor, commentEmail }) => (
  <div className="comment-body">
    <p className="comments-text">{body}</p>
    <div className="card-header">
      <span className="comments-link">{commentAuthor}</span>
      <a
        className="comments-link"
        href={`mailto:${commentEmail}`}
      >
        {commentEmail}
      </a>
    </div>
  </div>
);

Comments.propTypes = {
  body: PropTypes.string,
  commentAuthor: PropTypes.string,
  commentEmail: PropTypes.string,
};

Comments.defaultProps = {
  body: '',
  commentAuthor: '',
  commentEmail: '',
};
