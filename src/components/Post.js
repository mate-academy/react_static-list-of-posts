import React from 'react';
import PropTypes from 'prop-types';
import { CommentList } from './CommentList';
import { User } from './User';

export function Post({ title, body, user, comments }) {
  return (
    <>
      <div className="post">
        <div className="post-title">
          Post:
          {' '}
          {title}
        </div>
        <p>
          <div className="post-text">
            {body}
          </div>
        </p>
        <User {...user} />
        <CommentList commentsData={comments} />
      </div>

    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.shape({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
