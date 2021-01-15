import React from 'react';
import PropTypes from 'prop-types';
import { postsType,
  usersType,
  commentsType }
  from '../types/propTypesCollection';
import { User } from '../user/User';
import { CommentList } from '../commentlist/Commentlist';

import './Post.scss';

export const Post = ({ post }) => (
  <div className="post">
    <h1>
      {post.title}
    </h1>

    <p>
      {post.body}
    </p>

    <div>
      <User user={post.users} />
      <CommentList commentList={post.comments} />
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.arrayOf(postsType).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  users: usersType.isRequired,
  comments: PropTypes.arrayOf(commentsType).isRequired,
};
