import React from 'react';

import { CommentsList } from './CommentsList';
import { UserInfo } from './UserInfo';
import { Post } from '../types';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__user">
      <img
        className="PostInfo__userIcon"
        src="./images/user-name-30.svg"
        alt="User icon"
      />
      {post.user && <UserInfo user={post.user} />}
    </div>
    <h2 className="PostInfo__title">{post.title}</h2>
    <p className="PostInfo__body">{post.body}</p>
    <CommentsList comments={post.comments} />
  </div>
);
