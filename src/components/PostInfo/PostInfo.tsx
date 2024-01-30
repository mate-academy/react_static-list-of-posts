import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Comment } from '../../types/Comment';
import { Post } from '../../types/Post';
import { User } from '../../types/User';

type Props = {
  post: Post,
  user: User,
  comments: Comment[]
};

export const PostInfo: React.FC<Props> = ({ post, user, comments }) => {
  const noComments = comments.length < 1;
  const commentList = noComments
    ? <b data-cy="NoCommentsMessage">No comments yet</b>
    : <CommentList coments={comments} />;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        <p>
          {' Posted by  '}

          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      {commentList}
    </div>
  );
};
