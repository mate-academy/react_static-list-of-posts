import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { Post } from '../../types/Post';

type Props = {
  post: Post
  users: User[];
  comments: Comment[];
  userId: number;
};

export const PostInfo: React.FC<Props> = ({
  post,
  users,
  comments,
  userId,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <div>
        <UserInfo user={users[userId - 1]} />
      </div>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />
    <CommentList comments={comments} postId={post.id} />
  </div>
);
