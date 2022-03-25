import { FC } from 'react';
import FullPost from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';
import './postList.scss';

interface Props {
  posts: FullPost[]
}

export const PostList:FC<Props> = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li className="post-list__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
