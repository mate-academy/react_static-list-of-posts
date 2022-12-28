import React from 'react';
import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';

type Props = {
  postsList: Post[];
};

export const PostList: React.FC<Props> = ({ postsList }) => (
  <ul className="PostList">
    {postsList.map(post => (
      <li key={post.id} className="PostInfo">
        <PostInfo postInfo={post} />
      </li>
    ))}
  </ul>
);
