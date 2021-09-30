import React from 'react';
import { Post } from '../../react-app-env';
import { CommentsList } from '../CommentsList/CommentsList';
import { UserInfo } from '../UserInfo/UserInfo';
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
    arrayOfComments,
  } = post;

  return (
    <>
      <h2 className="list__title">
        {title}
      </h2>
      <div className="user list__user">
        {user
        && <UserInfo user={user} />}
      </div>
      <p className="list__body">
        {body}
      </p>
      <span className="list__comments">
        <h3 className="list__comments-title">
          Comments:
        </h3>
        <CommentsList comments={arrayOfComments} />
      </span>
    </>
  );
};
