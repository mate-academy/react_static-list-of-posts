import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../Comment-list/Comment-list';
import { UserInfo } from '../User-info/User-info';

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
      <h2>
        {title}
      </h2>
      <p><i>{body}</i></p>
      {user && (<UserInfo user={user} />)}
      {comments && (<CommentList comments={comments} />)}
    </div>
  );
};
