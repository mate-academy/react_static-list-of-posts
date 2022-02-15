import React from 'react';
import { Comment } from '../../types/comment';
import { UserInfo } from '../UserInfo/UserInfo';

import './CommentInfo.scss';

type Props = Omit<Comment, 'id'>;

export const CommentInfo: React.FC<Props> = ({ body, email, name }) => (
  <div className="CommentInfo">
    <div>
      {body}
    </div>
    <div>
      <UserInfo
        email={email}
        name={name}
      />
    </div>
  </div>
);
