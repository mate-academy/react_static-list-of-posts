import React from 'react';
import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Posts';
// import { CommentList } from '../CommentList';
// import comments from '../../api/comments';

type Props = {
  posts: Posts[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <>
        <PostInfo post={post} />
      </>
    ))}
  </div>
);
