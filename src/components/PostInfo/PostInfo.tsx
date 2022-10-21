import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { Comment } from '../../types/comment';

function extractComments(comments:Comment[], postId:number) {
  const relevantComments = comments.filter((comment: Comment) => (
    comment.postId === postId));

  if (relevantComments.length) {
    return (<CommentList comments={relevantComments} />);
  }

  return (<b data-cy="NoCommentsMessage">No comments yet</b>);
}

type Props = {
  post: Post;
  users: User[];
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({ post, users, comments }) => {
  const CurrentUser = users.find((user: User) => (
    user.id === post.userId));

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        {CurrentUser
          ? <UserInfo user={CurrentUser} />
          : '' }
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {extractComments(comments, post.id)}
    </div>
  );
};
