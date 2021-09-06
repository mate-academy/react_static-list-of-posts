import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    id,
    title,
    body,
    user,
    commentArr,
  } = post;

  return (
    <div className="post">
      <>
        {user
          ? <UserInfo user={user} />
          : <p>Unknown User</p>}
        <div className="post__key" key={id}>
          <p className="post__title">{title}</p>
          <p className="post__body">{body}</p>
        </div>
        <CommentList commentArr={commentArr} />
      </>
    </div>
  );
};
