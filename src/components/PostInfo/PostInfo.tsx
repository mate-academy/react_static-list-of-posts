import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = props => {
  const { post } = props;
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{body}</p>
      </div>
      {user && (<UserInfo user={user} />)}
      {comments && (<CommentList comments={comments} />)}
    </div>
  );
};
