import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div>
    <ul className="post">
      {posts.map(post => (
        <li className="post__body" key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>
);
