import React from 'react';
import { PostInfo } from '../PostInfo';
import { copyPosts } from '../Utils/copyPosts';
import { CommentList } from '../CommentList';
import { CopyPost } from '../../types/CopyPost';

export const PostList: React.FC = () => {
  return (
    <div className="PostList">
      {copyPosts.map((post: CopyPost) => {
        return (
          <div key={post.id} className="PostInfo">
            <PostInfo post={post} />
            <CommentList post={post} />
          </div>
        );
      })}
    </div>
  );
};
