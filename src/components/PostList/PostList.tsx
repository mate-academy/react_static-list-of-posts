import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts = [] }) => (
  <div className="PostList">
    {posts.map(post => (
      <div className="PostInfo" key={post.id}>
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
