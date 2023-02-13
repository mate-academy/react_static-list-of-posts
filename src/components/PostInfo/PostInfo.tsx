import React from 'react';
import { Post } from '../../types/Post';
import users from '../../api/users';
import commentsFromServer from '../../api/comments';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';

type PostInfoProps = {
  post: Post,
};

function getUser(userId: number): User | null {
  const foundUser = users.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const comments = commentsFromServer.filter(c => c.postId === postId);

  return comments;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const { title, body } = post;
  const user = getUser(post.userId);
  const comments = getComments(post.id);

  return user && (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length === 0
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={comments} />}
    </div>
  );
};
