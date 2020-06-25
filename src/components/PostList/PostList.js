import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import styles from './PostList.module.css';
import { PostListShape } from '../../Shapes/PostListShape';

export const PostList = ({ posts }) => (
  <div className={styles.list}>
    {
      posts.map((post) => {
        const { title, body, user, comments } = post;
        const data = {
          title, body, user: { ...user }, comments: [...comments],
        };

        return <Post key={post.id} post={data} />;
      })
    }
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostListShape).isRequired,
};
