import React from 'react';
import './CommentList.scss';

import { Comment } from '../../interfaces/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[],
}

export const CommentList: React.FC<Props> = ({ comments }) => (
  <fieldset>
    <legend>
      <mark>
        This comments section is rendered by&#160;
        <b>
          &#34;CommentList&#34;
        </b>
        &#160;component
      </mark>
    </legend>
    <ul data-cy="comments-list">
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </fieldset>
);
