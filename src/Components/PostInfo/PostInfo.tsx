import React from 'react';
import './PostInfo.scss';

import { PreparedPost } from '../../Types/PreparedPost';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="comment">
    <div className="post__info">
      <div className="post__info--body">
        {post.body}
      </div>
      <div className="post__info--title">
        {post.title}
      </div>
    </div>
    {post.user && <UserInfo user={post.user} />}
    <CommentList comments={post.comments} />
  </div>
);
