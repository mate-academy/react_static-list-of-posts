import React from 'react';
import CommentInfo from '../CommentInfo/CommentInfo';

import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

const CommentList: React.FC<Props> = ({ comments }) => (
  <ul className="post__comments">
    <p className="post__comment-title">Comments:</p>
    {comments.map(comment => (
      <li className="post__comment" key={comment.id}>
        <CommentInfo
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      </li>
    ))}
  </ul>
);

export default CommentList;
