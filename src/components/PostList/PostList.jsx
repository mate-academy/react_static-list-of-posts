import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.scss';
import PostsType from '../../types/postsTypes';
import UsersType from '../../types/usersTypes';
import CommentsType from '../../types/commentsTypes';

export const PostList = ({ posts, users, comments }) => (
  <ul className="list">
    {posts.map(post => (
      <li className="list__item" key={post.id}>
        <Post
          post={post}
          users={users}
          comments={comments}
        />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostsType).isRequired,
  users: PropTypes.arrayOf(UsersType).isRequired,
  comments: PropTypes.arrayOf(CommentsType).isRequired,
};
