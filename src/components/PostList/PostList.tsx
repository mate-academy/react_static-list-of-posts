import React from 'react';

import { PostInfo } from '../PostInfo';
import './PostList.scss';

import postsFromServer from '../../api/posts';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { PostComment } from '../../types/PostComment';

const preparePosts = (
  posts: Post[],
  comments: PostComment[],
  users: User[],
) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

const preparedPosts = preparePosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const PostList: React.FC = () => (
  <ul className="PostList">
    {preparedPosts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
