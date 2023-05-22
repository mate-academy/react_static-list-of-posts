import { FC } from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

import './PostList.scss';

interface Props {
  posts: Post[];
}

export const PostList: FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
