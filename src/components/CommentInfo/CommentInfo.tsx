import React from 'react';
import { Comment } from '../../_types/comment';
import UserInfo from '../UserInfo/UserInfo';

import './CommentInfo.scss';

type Props = Omit<Comment, 'id'>;

const CommentInfo: React.FC<Props> = ({ body, email, name }) => (
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

export default CommentInfo;
