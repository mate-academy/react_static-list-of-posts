import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  item: Comment;
};

export const CommentInfo: React.FC<Props> = ({ item }) => (
  <>
    <div className="CommentInfo">
      <div className="CommentInfo_title">
        <strong className="CommentInfo_name">
          {item.name}
        </strong>

        {' by '}

        <a
          href={item.email}
          className="CommentInfo_email"
        >
          {item.email}

        </a>
      </div>

      <div className="CommentInfo_body">
        {item.body}
      </div>
    </div>
  </>
);
