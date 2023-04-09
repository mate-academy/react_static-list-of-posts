import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../types/post';
import { Comment } from '../../types/comment';
import { User } from '../../types/user';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  function getUser(userId: number): User | null {
    return usersFromServer.find(user => userId === user.id) || null;
  }

  const user: User | null = getUser(post.userId);

  function getCommentsById(id: number): Comment[] {
    return commentsFromServer
      .filter(comment => comment.postId === id);
  }

  const comments = getCommentsById(post.id);

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{post.title}</h3>

          <p>
            {' Posted by  '}

            {user && <UserInfo user={user} />}

          </p>
        </div>

        <p className="PostInfo__body">
          {post.body}
        </p>

        <hr />

        {comments.length
          ? <CommentList comments={comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>}

      </div>

    </>
  );
};
