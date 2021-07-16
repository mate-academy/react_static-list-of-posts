import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';

import { postPropTypes, userPropTypes, commentPropTypes } from '../proptypes';

import './PostList.scss';

export const PostList = ({ posts, users, comments }) => (
  <ul className="post__container">
    {posts.map(post => (
      <li key={post.id} className="post">
        <Post {...post} />
        <User {...users.find(user => user.id === post.userId)} />
        <CommentList
          commentsFilter={
            comments.filter(comment => comment.postId === post.id)
          }
        />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(postPropTypes),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape(userPropTypes),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentPropTypes),
  ).isRequired,
};
