import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentInfo } from '../CommentInfo';

import { Post } from '../../types/Post';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="post__content">
      <h2 className="post__title">
        {post.title}
      </h2>
      <p className="post__body">
        {post.body}
      </p>
    </div>
    <UserInfo user={post.user} />
    <CommentInfo comments={post.comments} />
  </>
);
