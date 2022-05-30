import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Posts } from './types/Posts';
import { Comments } from './types/Comments';
import { Users } from './types/Users';
import { PostInfo } from './components/PostInfo/PostInfo';
import { PrepearedPost } from './types/PrepearedPosts';
import { UserInfo } from './components/UserInfo/UserInfo';

function prepearingPosts(
  post: Posts[],
  comment : Comments[],
  user : Users[],
) {
  const prepearePosts : PrepearedPost[] = [];

  post.forEach(element => {
    const result :PrepearedPost = element;

    result.user = user.find(el => el.id === result.userId);
    result.comments = comment.filter(el => result.id === el.postId);

    prepearePosts.push(result);
  });

  return prepearePosts;
}

const prepearedPosts = prepearingPosts(posts, comments, users);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div className="container posts__container">
      <PostInfo post={prepearedPosts[0]} />
      <PostInfo post={prepearedPosts[1]} />
      <PostInfo post={prepearedPosts[2]} />
    </div>
    <div className="container users__container">
      <UserInfo user={users[0]} />
      <UserInfo user={users[1]} />
      <UserInfo user={users[2]} />
    </div>
  </div>
);

export default App;
