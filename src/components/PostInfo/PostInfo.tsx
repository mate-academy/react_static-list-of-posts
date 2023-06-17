import React from 'react';
import { Post } from '../../types/Post';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const comments = commentsFromServer.filter(
    (comment) => comment.postId === post.id,
  );

  const user = usersFromServer.find(
    (foundUser) => foundUser.id === post.userId,
  ) || null;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {post.title}
        </h3>

        <UserInfo user={user} />
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      <CommentList comments={comments} />
    </div>
  );
};
