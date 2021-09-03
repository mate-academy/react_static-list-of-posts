import React from 'react';
import { CommentList } from '../commentList/CommentList';
import { UserInfo } from '../userInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    body,
    user,
    comment,
  } = post;

  return (
    <div className="post">
      <h2 className="post__title">
        {title}
      </h2>
      <p className="post__body">
        {body}
      </p>
      {user && <UserInfo user={user} />}
      <div className="post__comment">
        <CommentList comments={comment} />
      </div>
    </div>
  );
};
