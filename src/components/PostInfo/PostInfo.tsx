import React from 'react';
import { Comment } from '../../types/comment';
import { Post } from '../../types/post';
import { User } from '../../types/user';
import { CommentInfo } from '../CommentInfo';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post,
  comments: Comment[],
  user: User
};

export const PostInfo: React.FC<Props> = ({
  post,
  comments,
  user,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{ post.title }</h3>
      <UserInfo user={user} />
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />
    {comments.length < 1
      ? <b data-cy="NoCommentsMessage">No comments yet</b>
      : comments.map((el:Comment) => <CommentInfo comment={el} />)}

  </div>
);
