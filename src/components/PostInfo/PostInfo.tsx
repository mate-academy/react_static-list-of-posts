import React from 'react';
import { Post } from '../../types/Post';
import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const comments = commentsFromServer.filter(
    (comment) => comment.postId === post.id,
  );

  const users = usersFromServer.filter(
    (item) => item.id === post.userId,
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          {
            users.map(user => (
              <UserInfo user={user} />
            ))
          }
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};
