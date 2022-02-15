import React from 'react';
import { UserInfo } from '../UserInfo';
import { User } from '../types/User';
import { CommentList } from '../CommentList';
import { Comment } from '../types/Comment';
import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
  user: User,
  comment: Comment[],
};

export const PostInfo: React.FC<Props> = ({
  title, body, user, comment,
}) => (
  <>
    <div className="user_vs_post">
      <div className="user_block">
        <div>
          <div className="avatar">
            avatar
          </div>
          <div>
            {user && (
              <UserInfo {...user} />
            )}
          </div>
        </div>
        <div className="post">
          <h2 className="title">
            {title}
          </h2>
          <p className="text_post">{body}</p>
        </div>
      </div>
      <div>
        <CommentList comments={comment} />
      </div>
    </div>
  </>
);
