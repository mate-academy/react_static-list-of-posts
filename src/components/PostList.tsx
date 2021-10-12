import React from 'react';

import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { PostInfo } from './PostInfo';
import { UserInfo } from './UserInfo';

type Props = {
  postList: Post[];
};

export const PostList: React.FC<Props> = ({ postList }) => {
  return (
    <ul className="postList">
      {postList.map(post => (
        <li className="postList__Item">
          <PostInfo post={post} />
          {post.user && (
            <UserInfo user={post.user} />
          )}
          {post.comments && (
            <CommentList comments={post.comments} />
          )}
        </li>
      ))}
    </ul>
  );
};
