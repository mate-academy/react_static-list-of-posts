import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({
  post,
}) => {
  const {
    id,
    userId,
    title,
    body,
    comments = [],
    user,
  } = post;

  const defaultU = {
    id: 0,
    name: 'Jon Doe',
    username: 'Anonymous',
    email: 'nomail@mail.com',
  };

  const defaultUser = user || defaultU;

  function getUserById(users: User[], findById: number): User {
    return users.find((theUser) => findById === theUser.id) || defaultUser;
  }

  const curUser = getUserById(usersFromServer, userId);

  function getCommentsToPost(commentsArr: Comment[], postId: number) {
    return commentsArr.filter((comm) => postId === comm.postId) || [];
  }

  const curComments = comments.length !== 0 ? comments : commentsFromServer;

  const commentsToPost = getCommentsToPost(curComments, id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{ title }</h3>

        <p>
          {' Posted by  '}
          <UserInfo user={curUser} />
        </p>
      </div>

      <p className="PostInfo__body">
        { body }
      </p>

      <hr />

      { commentsToPost.length === 0
        ? (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )
        : (
          <CommentList comments={commentsToPost} />
        )}

    </div>
  );
};
