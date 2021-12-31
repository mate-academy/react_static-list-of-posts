import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

type Comments = {
  comments: Comment[] |  undefined;
};

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: object,
  phone: string,
  website: string,
  company: object,
}

type PropUser = {
  user: User | undefined;
};

interface PreparedPosts {
  userId: number,
  id: number,
  title: string,
  body: string,
  user?: User | undefined,
  comments?: Comment[] | undefined,
}

type Posts = {
  posts: PreparedPosts[];
};

type Post = {
  post: PreparedPosts;
};

const preparedPosts: PreparedPosts[] = posts.map(post => {
  const preparedPost: PreparedPosts = { ...post };

  preparedPost.user = users.find(a => a.id === post.userId);
  preparedPost.comments = comments.filter(a => a.postId === post.id);

  return preparedPost;
});

const UserInfo: React.FC<PropUser> = ({ user }) => {
  if (user !== undefined) {
    return (
      <div className="PostList__user-info">
        <h2>{user.name}</h2>
        <span>{user.email}</span>
      </div>
    );
  }

  return null;
};

const CommentInfo: React.FC<Comments | any> = ({ comments }) => {
  if (comments !== undefined) {
    return (comments.map((comment: any) =>
      <div className="PostList__comment-info">
        <h3>{comment.name}</h3>
        <p>{comment.body}</p>
        <span>{comment.email}</span>
      </div>
      )
    );
  }

  return null;
};

const PostInfo: React.FC<Post> = ({ post }) => (
  <>
    <UserInfo user={post.user} />
    <CommentInfo comments={post.comments} />
  </>
);

const PostList: React.FC<Posts> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id} className="PostList__element">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
