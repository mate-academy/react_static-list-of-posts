import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../Post-info/Post-info';

export const PostList: React.FC<{ content: Post[] }> = ({ content }) => {
  // const { content } = props;

  return (
    <ul style={{ listStyle: 'none'}}>
      {content.map((post: Post) => (
        <li
          style={{ border: '1px solid black', padding: '10px', marginBottom: '12px' }}
          key={post.id}
        >
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  );
};
