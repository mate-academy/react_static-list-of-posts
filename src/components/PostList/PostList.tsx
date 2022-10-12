import { FC } from 'react';
import { FullPost } from '../../react-app-env';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Probs = {
  posts: FullPost[];
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
