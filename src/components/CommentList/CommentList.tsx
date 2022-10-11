import React from 'react';

import { CommentTypes } from '../../types';
import { CommentInfo } from '../CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Array<CommentTypes>
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const listItems = comments.map(comment => (
    <CommentInfo comment={comment} key={comment.id} />
  ));

  return (
    <ul className="CommentList">
      {listItems}
    </ul>
  );
};
