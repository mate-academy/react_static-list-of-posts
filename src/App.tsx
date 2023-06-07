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
  comments: Comment[];
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

interface CommentInfoProps {
  postComment: Comment;
}

const CommentInfo: React.FC<CommentInfoProps> = ({ postComment }) => {
  const {
    name,
    email,
    body,
  } = postComment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          Telly_Lynch@karl.co.uk
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};

interface CommentListProps {
  commentList: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ commentList }) => {
  const isHaveComments = commentList.length > 0;

  return (isHaveComments
    ? (
      <div className="CommentList">
        {commentList.map(comment => (
          <CommentInfo postComment={comment} key={comment.id} />
        ))}
      </div>
    ) : (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )
  );
};

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
    title,
    body,
    comments,
  } = postinfo;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo postUser={user} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList commentList={comments} />
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
