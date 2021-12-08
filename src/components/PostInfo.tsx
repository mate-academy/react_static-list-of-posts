import React from 'react';

import { CommentsList } from './CommentsList';
import { UserInfo } from './UserInfo';
import { Post } from '../types';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="postInfo">
    <div className="postInfo__user">
      <img
        className="postInfo__userIcon"
        src="./images/user.svg"
        alt="User icon"
      />
      {post.user && <UserInfo user={post.user} />}
    </div>
    <h2 className="postInfo__title">{post.title}</h2>
    <p className="postInfo__body">{post.body}</p>
    <CommentsList comments={post.comments} />
  </div>
);
