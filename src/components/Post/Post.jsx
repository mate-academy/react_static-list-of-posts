import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="Post">
    <div className="postTitle">
      {title}
    </div>
    <div className="postBody">
      {body}
    </div>
    <div className="infoUser">
      <User {...user} />
    </div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape.isRequired,
  comments: PropTypes.shape.isRequired,
};
