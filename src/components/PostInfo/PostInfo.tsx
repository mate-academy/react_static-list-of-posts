import React from 'react';

import UserInfo from '../UserInfo';
import CommentList from '../CommentList';

type Props = {
  posts: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>

      {posts.person && (<UserInfo user={posts.person} />)}

      {posts.comment && (<CommentList comments={posts.comment} />)}

    </div>
  );
};
