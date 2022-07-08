import React from 'react';
import { Post } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="post">
    {posts.map(post => (
      <div className="post__item" key={post.id}>
        <PostInfo
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      </div>
    ))}
  </div>
);
