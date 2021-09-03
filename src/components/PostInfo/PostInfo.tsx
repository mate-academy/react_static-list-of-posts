import React from 'react';

import UserInfo from '../UserInfo/index';
import CommentList from '../CommentList/index';

type Props = {
  posts: Post;
};

export const PostInfo: React.FC<Props> = ({ posts }) => {
  const {
    title, body, user, comment,
  } = posts;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>

      {user && (<UserInfo user={user} />)}

      {comment && (<CommentList comments={comment} />)}

    </div>
  );
};
