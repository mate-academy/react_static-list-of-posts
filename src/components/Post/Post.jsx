import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ title, body, user, comments }) => (
  <>
    <div className="post">
      <User {...user} />
      <div className="post__section">
        <h2 className="post__title">
          {title}
        </h2>
        <p>
          {body}
        </p>
      </div>
    </div>
    <CommentList comments={comments} />
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  comments: PropTypes.arrayOf({}).isRequired,
};
