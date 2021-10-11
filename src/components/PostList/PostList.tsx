import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  content: Post[];
};

export const PostList: React.FC<Props> = props => {
  const { content } = props;

  return (
    <ul>
      {content.map((post: Post) => (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
