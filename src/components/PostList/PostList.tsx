import React from 'react';
import { CompletePost } from '../../types/CompletePost';
import { PostInfo } from '../PostInfo';

export interface Props {
  completePost: CompletePost[];
}

export const PostList: React.FC<Props> = ({ completePost }) => (
  <>
    {completePost.map(post => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </>
);
