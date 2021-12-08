import React from 'react';
import { IPost } from '../../types/IPost';
import { PostInfo } from '../PostInfo/PostInfo';

import './PostList.scss';

type Props = {
  posts: IPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="postList">
      {posts.map(post => (
        <PostInfo
          key={post.id}
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      ))}
    </div>
  );
};
