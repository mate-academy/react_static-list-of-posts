import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import CommentList from '../CommentList/CommentList';
import { Post } from '../../types/Post';

type Props = Omit<Post, 'id' | 'userId'>;

const PostInfo: React.FC<Props> = ({
  title, body, user, comment,
}) => (
  <div className="post-info">
    <p data-cy="post-title">
      <strong>Title:</strong>
      {' '}
      {title}
    </p>
    <p data-cy="post-body">
      <strong>Body:</strong>
      {' '}
      {body}
    </p>
    <p>
      <UserInfo user={user} />
    </p>
    <p>
      <CommentList comments={comment} />
    </p>
  </div>
);

export default PostInfo;
