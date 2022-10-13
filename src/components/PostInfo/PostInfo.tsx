import React from 'react';

import { FullPost } from '../../types/FullPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: FullPost;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by:  '}
        { post.user && (
          <UserInfo user={post.user} key={post.user.id} />
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <CommentList comments={post.commentsList} />
  </div>
);
