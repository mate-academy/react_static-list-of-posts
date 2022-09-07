import React from 'react';

import { PostWithUserAndComm } from '../../types/PostWithUserAndComm';
import { PostInfo } from '../PostInfo';

type Props = {
  postsList: PostWithUserAndComm[];
};

export const PostList: React.FC<Props> = ({ postsList }) => (
  <div className="PostList">
    {postsList.map(post => <PostInfo post={post} key={post.id} />)}
  </div>
);
