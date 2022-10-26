import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[],
}

export const PostList: React.FC<Props> = (props) => (
  <div className="PostList">
    {props.posts.map(post => (
      <PostInfo {...post} />
    ))}
  </div>
);
