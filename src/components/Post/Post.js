import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './post.scss';

const Post = ({ post }) => (
  <div className="post-list__post post">
    <div className="post__title">
      {post.title}
    </div>
    <div className="post__body">
      {post.body}
    </div>
    <User className="post__user" user={post.user} />
    <CommentList className="post__comments" comments={post.allComment} />
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    user: User.propTypes,
    allComment: CommentList.propTypes,
  }).isRequired,

};

export { Post };
