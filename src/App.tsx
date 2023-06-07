import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

interface FullPostData extends Post {
  user?: User;
  comments?: Comment[];
}

interface PreparePostData {
  users: User[];
  posts: Post[];
  comments: Comment[];
}

const prepareApiData = (
  args: PreparePostData,
): FullPostData[] => {
  const { users, posts, comments } = args;

  return posts.map(post => {
    const postUser = users.find(checkUser => post.userId === checkUser.id);

    const postComments = comments.filter(comment => (
      comment.postId === post.id
    ));

    return {
      ...post,
      user: postUser,
      comments: postComments,
    };
  });
};

const fullPostData = prepareApiData({
  users: usersFromServer,
  posts: postsFromServer,
  comments: commentsFromServer,
});

interface UserInfoProps {
  postUser: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ postUser }) => {
  const {
    name,
    email,
  } = postUser;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};

interface PostInfoProps {
  postinfo: FullPostData;
}

const PostInfo: React.FC<PostInfoProps> = ({ postinfo }) => {
  const {
    user,
    comments,
  } = postinfo;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">qui est esse</h3>

        {user && <UserInfo postUser={user} />}
      </div>

      <p className="PostInfo__body">
        est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae
        ea dolores neque fugiat blanditiis voluptate porro vel nihil
        molestiae ut reiciendis qui aperiam non debitis possimus qui neque
        nisi nulla
      </p>

      <hr />

      <b data-cy="NoCommentsMessage">No comments yet</b>
    </div>
  );
};

interface PostListProps {
  posts: FullPostData[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo postinfo={post} key={post.id} />
      ))}
    </div>
  );
};

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={fullPostData} />
  </section>
);
