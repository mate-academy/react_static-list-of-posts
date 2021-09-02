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
      <div className="item__title">
        {title}
      </div>
      <div className="item__body">
        {body}
      </div>
      <div className="item__user user">
        {user && (
          <UserInfo user={user} />
        )}
      </div>
      <div className="item__comments">
        <CommentList comments={commentsOfThisPost} />
      </div>
    </>
  );
};
