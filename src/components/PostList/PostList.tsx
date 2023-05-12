import React from 'react';
import './PostList.scss';

import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';

type PostListType = {
  posts: Post[],
  comments: Comment[],
  users: User[]
};

export const PostList: React.FC<PostListType> = (
  { posts, comments, users },
) => (
  <div className="PostList">
    {posts.map(post => {
      const newPost = { ...post };

      newPost.user = users.find(user => user.id === post.userId);

      newPost.comments = comments
        .filter(comment => post.id === comment.postId);

      return (
        <PostInfo
          post={newPost}
          key={post.id}
        />
      );
    })}
  </div>
);
