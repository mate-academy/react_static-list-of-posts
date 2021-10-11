import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    user,
    title,
    body,
    comment,
  } = post;

  return (
    <div className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <>
        {user && <UserInfo user={user} />}
        <CommentList comments={comment} />
      </>
    </div>
  );
};
