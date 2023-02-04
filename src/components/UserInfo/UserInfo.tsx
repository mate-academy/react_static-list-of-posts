import React from 'react';

import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

export const UserInfo: React.FC<Props> = ({ post }) => {
  return post ? (
    <a className="UserInfo" href={`mailto:${post.user?.email}`}>
      {post.user?.name}
    </a>
  ) : (
    <></>
  );
};
