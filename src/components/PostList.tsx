import React from 'react';
import { Post } from '../types.ts/Post';
import { Users } from '../types.ts/Users';
import { Comment } from '../types.ts/Comment';
import { FullPost } from '../types.ts/FullPost';
import { PostInfo } from './PostInfo';

import postsFromServer from '../api/posts';
import commentsFromServer from '../api/comments';
import usersFromServer from '../api/users';

function preparePosts(
  posts: Post[],
  users: Users[],
  comments: Comment[],
): FullPost[] {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const preparedPosts = preparePosts(postsFromServer, usersFromServer, commentsFromServer);

export const PostList: React.FC = () => (
  <>
    {
      preparedPosts.map(post => (
        <div className="card" key={post.id}>
          <PostInfo {...post} />
        </div>
      ))
    }
  </>

);
