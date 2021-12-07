import React from 'react';
import style from './PostList.module.css';
import { PreparedPost } from '../../types/Types';
import PostInfo from '../PostInfo/PostInfo';

interface Props {
  posts: PreparedPost[],
}

const PostList: React.FC<Props> = ({ posts }) => (
  <ul className={style.postList}>
    {posts.map(post => (
      <li className={style.postItem}>
        <PostInfo
          key={post.id}
          post={post}
        />
      </li>
    ))}
  </ul>
);

export default PostList;
