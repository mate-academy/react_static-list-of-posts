import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    body,
    user,
    commentsOfThisPost,
  } = post;

  return (
    <>
      <h2 className="item__title">
        {title}
      </h2>
      <p className="item__body">
        {body}
      </p>
      <p className="item__user user">
        {user && (
          <UserInfo user={user} />
        )}
      </p>
      <div className="item__comments">
        <CommentList comments={commentsOfThisPost} />
      </div>
    </>
  );
};
