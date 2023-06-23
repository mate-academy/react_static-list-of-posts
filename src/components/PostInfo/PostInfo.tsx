import React from 'react';

import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { Comment } from '../../types/comment';
import { User } from '../../types/user';
import { Post } from '../../types/post';

type Props = {
  comments: Comment[],
  users: User[],
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ comments, users, post }) => {
  const commentsForThisPost: Comment[] = comments
    .filter((comment: Comment) => comment.postId === post.id);
  const nobody = {
    id: -1,
    name: 'Without autor',
    username: 'Without autor',
    email: 'Without autor',
  };

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo
            user={users.find((u: User) => u.id === post.userId) || nobody}
          />
        </p>
      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {commentsForThisPost.length < 1
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={commentsForThisPost} />}
    </div>
  );
};
