import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../user';
import { CommentsList } from '../commentList';

import './Post.scss';

export function Post({ title, body, user, comments }) {
  return (
    <div className="card mb-5 p-4">
      <div className="card-body">
        <h2 className="card-title display-4 text-uppercase">{title}</h2>
        <div className="card-subtitle mb-2 text-muted">
          <User {...user} />
        </div>
        <blockquote className="blockquote p-3">
          <p className="card-text lead quote-body">
            <i>
              &quot;
              {body}
              &quot;
            </i>
          </p>
        </blockquote>
        <h3 className="display-5">Comments:</h3>
        <CommentsList comments={comments} />
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf.isRequired,
  comments: PropTypes.arrayOf.isRequired,
};
