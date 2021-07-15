import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './PostList.scss';

export const PostList = ({ posts, users, comments }) => (
  <div className="post__container">
    {posts.map(post => (
      <div key={post.id} className="post">
        <Post {...post} />
        <User {...users.find(user => user.id === post.userId)} />
        <CommentList
          commentsFilter={
            comments.filter(comment => comment.postId === post.id)
          }
        />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
