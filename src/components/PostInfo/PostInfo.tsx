import React from 'react';
import { Post } from '../../react-app-env';
import { CommentsList } from '../CommentsList/CommentsList';
import { UserInfo } from '../UserInfo/UserInfo';

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
      <h2>
        {title}
      </h2>
      <div>
        {user
        && <UserInfo user={user} />}
      </div>
      <p>
        {body}
      </p>
      <div>
        <CommentsList comments={arrayOfComments} />
      </div>
    </>
  );
};
