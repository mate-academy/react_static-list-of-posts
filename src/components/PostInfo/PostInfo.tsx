import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Posts } from '../../types/Posts';
import { User } from '../../types/User';
import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';

interface Props{
  posts: Posts;
}

export const PostInfo: React.FC<Props> = (props) => {
  const users = usersFromServer;
  const comments = commentsFromServer;
  const foundUser = users.find((user: User) => user.id === props.posts.userId);
  const found = comments.filter(
    (comment) => comment.postId === props.posts.id,
  );

  return (
    <>
      <div className="PostInfo" key={props.posts.id}>
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">{props.posts.title}</h3>

          <p>
            {' Posted by  '}

            <UserInfo user={foundUser} />
          </p>
        </div>

        <p className="PostInfo__body">
          {props.posts.body}
        </p>
        { (found.length > 0) ? (
          <CommentList
            comments={found}
          />
        ) : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        ) }

      </div>
    </>
  );
};
