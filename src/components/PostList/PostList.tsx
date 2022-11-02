import React from 'react';

import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

// Types props
import { Post } from '../../types/Post';

interface PostListProps {
  posts: Post[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => post.user && (
      <div className="PostInfo" key={post.id}>
        <PostInfo
          user={post.user}
          body={post.body}
          title={post.title}
        />

        <hr />
        <CommentList comments={post.comments} />
      </div>
    ))}
  </div>
);
