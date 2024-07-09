import React from 'react';
import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';

type Props = {
  postsList: Post[];
};

export const PostList: React.FC<Props> = ({ postsList }) => {
  return (
    <div className="PostList">
      {postsList.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
