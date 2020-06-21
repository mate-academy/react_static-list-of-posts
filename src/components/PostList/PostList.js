import React from 'react';
import PropType from 'prop-types';
import { Post } from '../Post/Post';
import styles from './PostList.module.css';

export const PostList = props => (
  <div className={styles.list}>
    {[...props.posts].map((post) => {
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
  posts: PropType.arrayOf.isRequired,
};
