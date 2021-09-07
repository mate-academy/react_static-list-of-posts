import React from 'react';

import { CommentList } from '../CommentInfo/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <>
      <h3 className="list__postName">{title}</h3>
      <p className="list__post">{body}</p>

      {
        user && (
          <UserInfo user={user} />
        )
      }
      <h4 className="list__comments comments">Comments:</h4>
      <CommentList comments={comments} />
    </>
  );
};
