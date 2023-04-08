import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
// import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { User } from './types/User';
import { Post } from './types/Post';
// import { Comment } from './types/Comment';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
}));

// function getPost(postId: number): Post | null {
//   const foundPost = posts.find(post => post.id === postId);

//   return foundPost || null;
// }

// export const comments: Comment[] = commentsFromServer.map(comment => ({
//   ...comment,
//   post: getPost(comment.postId),
// }));

// type Props4 = {
//   comment: Comment,
// };

// export const CommentInfo: React.FC<Props4> = ({ comment }) => (
//   <div className="CommentInfo">
//     <div className="CommentInfo__title">
//       <strong className="CommentInfo__name">
//         {comment.name}
//       </strong>

//       {' by '}

//       <a
//         className="CommentInfo__email"
//         href={`mailto:${comment.email}`}
//       >
//         {comment.email}
//       </a>
//     </div>

//     <div className="CommentInfo__body">
//       {comment.body}
//     </div>
//   </div>
// );

// type Props3 = {
//   postId: number,
//   comments: Comment[],
// };

// export const CommentList: React.FC<Props3> = ({ postId, comments }) => {
//   const postComments = comments.filter(comment => comment.post?.id === postId)

//   return (
//     <div className="CommentList">
//       {postComments.length > 0 ? (
//         postComments.map(comment => (
//           <CommentInfo comment={comment} key={comment.id} />
//         ))
//       ) : (
//         <b data-cy="NoCommentsMessage">No comments yet</b>
//       )}
//     </div>
//   );
// };

// type Props2 = {
//   user: User;
// };

// export const UserInfo: React.FC<Props2> = ({ user }) => (
//   <a className="UserInfo" href={`mailto:${user.email}`}>
//     {user.name}
//   </a>
// );

// type Props1 = {
//   post: Post;
// };

// export const PostInfo: React.FC<Props1> = ({ post }) => (
//   <div className="PostInfo">
//     <div className="PostInfo__header">
//       <h3 className="PostInfo__title">
//         {post.title}
//       </h3>

//       <p>
//         {' Posted by  '}

//         {post.user && (
//           <UserInfo user={post.user} />
//         )}
//       </p>
//     </div>

//     <p className="PostInfo__body">
//       {post.body}
//     </p>

//     <CommentList postId={post.id} comments={comments} />
//   </div>
// );

// type Props = {
//   posts: Post[];
// };

// export const PostList: React.FC<Props> = ({ posts }) => (
//   <div className="PostList">
//     {posts.map(post => (
//       <PostInfo post={post} key={post.id} />
//     ))}
//   </div>
// );

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
