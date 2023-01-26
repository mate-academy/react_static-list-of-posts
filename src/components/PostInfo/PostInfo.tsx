import React from 'react';
import { CommentType } from '../../types/CommentType';
import { UserType } from '../../types/UserType';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type PostInfoProps = {
  user: UserType | null;
  comments: CommentType[] | null;
  title: string;
  body: string;
};

export const PostInfo: React.FC<PostInfoProps> = ({
  user,
  comments,
  title,
  body,
}) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user && (
            <UserInfo
              name={user.name}
              email={user.email}
              key={user.id}
            />
          )}
        </p>
      </div>

      <div className="PostInfo__body">
        {body}
      </div>

      {comments?.length
        ? comments.map(comment => (
          <CommentList comment={comment} key={comment.id} />
        ))
        : (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </div>
  );
};
