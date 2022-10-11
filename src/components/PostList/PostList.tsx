import { FC } from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Probs = {
  posts: Post[];
};

export const PostList: FC<Probs> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
