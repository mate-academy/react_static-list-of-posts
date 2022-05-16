import React from 'react';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';
import {
  PostsFromServer,
  CommentsFromServer,
  UsersFromServer,
  GeneralPosts,
} from './react-app-env';

import './App.scss';

const App: React.FC = () => {
  const getNewPostList = (
    postsList: PostsFromServer[],
    commentsList: CommentsFromServer[],
    usersList: UsersFromServer[],
  ): GeneralPosts[] => {
    return postsList.map(post => ({
      ...post,
      user: usersList
        .find(user => post.userId === user.id)
        || null,
      comments: commentsList
        .filter(comment => post.id === comment.postId)
        || null,
    }));
  };

  const preparedPosts: GeneralPosts[] = getNewPostList(
    posts,
    comments,
    users,
  );

  return (
    <div className="App">
      <h1 className="mainTitle">
        Static list of posts
      </h1>

      <PostList generalPosts={preparedPosts} />
    </div>
  );
};

export default App;
