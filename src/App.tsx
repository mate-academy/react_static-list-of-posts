import React from 'react';

import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PreparedPosts } from './types/PreparedPosts';

function getPreparedPosts(
  postsArr: Post[],
  commentsArr: Comment[],
  usersArr: User[],
) {
  const getCommentsArr = (post: Post) => (
    commentsArr.filter(comment => comment.postId === post.id)
  );

  const findUser = (post: Post) => (
    usersArr.find(ul => ul.id === post.userId)
  );

  return postsArr.map(post => (
    {
      ...post,
      comments: getCommentsArr(post),
      user: findUser(post) || null,
    }
  ));
}

const arrOfPosts: PreparedPosts[] = getPreparedPosts(posts, comments, users);

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">
      Posts
    </h1>
    <PostList arrOfPosts={arrOfPosts} />
  </div>
);

export default App;
