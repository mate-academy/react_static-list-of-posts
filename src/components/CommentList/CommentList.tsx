import React from 'react';
import { Comments } from '../../types/Comments';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className="posts__comments-list">
      {
        comments.map(item => (
          <li className="posts__item" key={item.id}>
            <CommentInfo
              body={item.body}
              name={item.name}
              email={item.email}
            />
          </li>
        ))
      }
    </ul>
  );
};
