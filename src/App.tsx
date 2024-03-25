import React from 'react';
import './components/CommentList/CommentList.scss';
import './components/CommentInfo/CommentInfo.scss';
import './components/PostInfo/PostInfo.scss';
import './components/PostList/PostList.scss';
import './components/UserInfo/UserInfo.scss';
import './App.scss';
import { PostList } from './components/PostList/PostList';
import { Post } from './components/PostInfo/index';
import { User } from './components/UserInfo/index';
import { Comment } from './components/CommentInfo/index';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const preparePosts = () => {
  return postsFromServer.map(post => {
    const postUser: User | undefined = usersFromServer.find(
      user => user.id === post.userId,
    );
    const postComments: Comment[] = commentsFromServer.filter(
      comment => comment.postId === post.id,
    );

    return {
      ...post,
      user: postUser || { id: 0, name: '', email: '', username: '' },
      comments: postComments,
    };
  });
};

export const App: React.FC = () => {
  const posts: Post[] = preparePosts();

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
