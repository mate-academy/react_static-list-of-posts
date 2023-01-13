import React from 'react';
import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo';

type Props = {
  postsFromServer: Posts[],
};

export const PostList: React.FC<Props> = ({ postsFromServer }) => (
  <div className="PostList">
    {postsFromServer.map(post => <PostInfo post={post} key={post.id} />)}
  </div>
);
