import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="App__posts">
      {posts.map(post => (
        <PostInfo
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          user={post.user || null}
          comments={post.comments}
        />
      ))}
    </div>
  );
};
