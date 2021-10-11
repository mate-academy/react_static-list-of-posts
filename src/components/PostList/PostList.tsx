import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../types/Post';

type Props = {
  post: Post[],
};

export const PostList: React.FC<Props> = ({ post }) => {
  return (
    <ul>
      {post.map(item => <li key={item.id}><PostInfo props={item} /></li>)}
    </ul>
  );
};
