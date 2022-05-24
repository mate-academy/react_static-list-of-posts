import React from 'react';
import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  postsList: Posts[];
};

export const PostList: React.FC<Props> = ({ postsList }) => (
  <div className="postList">
    {postsList.map((postItem) => (
      <PostInfo
        key={postItem.id}
        post={postItem}
      />
    ))}
  </div>
);
