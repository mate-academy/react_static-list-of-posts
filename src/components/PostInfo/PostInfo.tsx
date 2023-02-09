import React from 'react';

import { Post } from '../../types/Posts';
import { Comment } from '../../types/Comments';
import { User } from '../../types/Users';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export interface PostWithComments extends Post {
  user: User;
  comments: Comment[];
}

export const PostInfo: React.FC<{ post: PostWithComments }> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList comments={comments} />
    </div>
  );
};
