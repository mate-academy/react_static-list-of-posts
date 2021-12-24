import React from 'react';
import { Post } from '../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <div>
      {post.user && <UserInfo user={post.user} />}
    </div>
    <div>
      {post.comments && <CommentList comments={post.comments} />}
    </div>
  </div>
);
