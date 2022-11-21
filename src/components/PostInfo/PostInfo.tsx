import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { Comment } from '../../types/comment';

function extractComments(comments:Comment[], postId:number) {
  return comments.filter((comment: Comment) => (
    comment.postId === postId));
}

type Props = {
  post: Post;
  users: User[];
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({ post, users, comments }) => {
  const CurrentUser = users.find((user: User) => (
    user.id === post.userId));

  const relevantComments = extractComments(comments, post.id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        {CurrentUser && <UserInfo user={CurrentUser} />}
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      {
        relevantComments.length > 0
          ? <CommentList comments={relevantComments} />
          : (
            <>
              <hr />
              <b data-cy="NoCommentsMessage">No comments yet</b>
            </>
          )
      }
    </div>
  );
};
