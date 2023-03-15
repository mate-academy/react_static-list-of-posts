import React from 'react';

import './CommentList.scss';

import { Post } from '../../types/post';
import { CommentInfo } from '../CommentInfo';

type Props = {
  posts: Post[];
};

export const CommentList: React.FC<Props> = ({ posts }) => (
  <div className="CommentList">
    {posts.map(post => (
      <CommentInfo comment={post.comment} key={post.id} />
    ))}
  </div>
);
