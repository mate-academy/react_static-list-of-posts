import React from 'react';

import { CommentList } from '../CommentList';
import { PostInfo } from '../PostInfo';

// Types props
import { Comment } from '../CommentInfo';
import { User } from '../UserInfo';

interface Post {
  user: User,
  title: string,
  body: string,
  id: number,
  comments: Comment[],
}

interface PostListProps {
  posts: Post[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
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
