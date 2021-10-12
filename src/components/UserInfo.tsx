import React from 'react';
import { Post } from '../types/Post';

type Props = {
  post: Post
};

export const UserInfo: React.FC<Props> = ({ post }) => (
  <div className="post-user">
    <p>
      {`Autor name: ${post.user?.name}`}
    </p>
    <p>
      {`Autor email: ${post.user?.email}`}
    </p>
  </div>
);
