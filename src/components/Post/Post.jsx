import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import { CommentList } from '../CommentList';
import './Post.scss';

export const Post = ({ title, body, user, comments }) => (
  <>
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
      <User {...user} />
    </div>
    <div className="comments">
      <h3>Comments: </h3>
      <CommentList commentList={comments} />
    </div>
  </>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
