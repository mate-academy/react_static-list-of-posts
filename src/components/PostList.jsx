import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { PostType } from '../types';

export const PostList = ({ listOfPosts }) => (
  <ul className="post__list">
    {listOfPosts.map(post => (
      <li key={post.id} className="post">
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
  listOfPosts: PropTypes.arrayOf(PostType).isRequired,
};
