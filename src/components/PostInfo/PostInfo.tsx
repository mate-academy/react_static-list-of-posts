import React from 'react';
import { Comments } from '../../Type/Comments';
import { User } from '../../Type/User';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comments[],
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => {
  return (
    <>
      <h1 className="post__title ">
        {title}
      </h1>

      <p className="post__body">
        {body}
      </p>

      {user && (
        <div className="post__user user">
          <UserInfo
            name={user.name}
            email={user.email}
          />
        </div>
      )}

      <div className="comments">
        <h2 className="comments__title">Comments:</h2>

        <CommentList comments={comments} />
      </div>
    </>
  );
};
