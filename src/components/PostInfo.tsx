import React from 'react';
import { CommentList } from './CommentList/CommentList';
import { UserInfo } from './UserInfo';

export type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const
    {
      title,
      body,
      user,
      comments,
    } = post;

  return (
    <>
      <p>
        <h1>
          {title}
        </h1>
        {body}
        <UserInfo user={user} />
      </p>
      <h2>Comments: </h2>
      <CommentList comments={comments} />
    </>
  );
};
