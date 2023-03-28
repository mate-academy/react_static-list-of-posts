import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <div className="PostInfo">
    {posts.map(item => (
      <PostInfo post={item} />
    ))}
  </div>
);
