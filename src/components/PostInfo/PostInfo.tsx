import React from 'react';
import { FullPost } from '../../types/FullPost';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: FullPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    {post.user && (
      <div className="post">
        <UserInfo user={post.user} />
        <div className="post__text">
          <h3 className="post__title">
            {post.title}
          </h3>
          <p className="post__body">
            {post.body}
          </p>
        </div>
      </div>
    )}

    <CommentList comments={post.comments} />
  </>
);
