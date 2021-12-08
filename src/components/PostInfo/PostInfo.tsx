import React from 'react';
import { Post } from '../../types/Post';
import { CommentsList } from '../CommentsList/CommentsList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <p className="PostInfo__user">
      {post.user && <UserInfo user={post.user} />}
    </p>
    <h2 className="PostInfo__title">
      {post.title}
    </h2>
    <p className="PostInfo__body">
      {post.body}
    </p>
    <CommentsList comments={post.comments} />
  </div>
);
