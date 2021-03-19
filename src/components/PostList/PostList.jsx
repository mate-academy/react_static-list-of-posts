import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostType } from '../../types';

export const PostList = ({ postList }) => (
  <ul className="post">
    {postList.map(post => (
      <li key={post.id} className="post__list">
        <Post
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape(PostType).isRequired,
  ).isRequired,
};
