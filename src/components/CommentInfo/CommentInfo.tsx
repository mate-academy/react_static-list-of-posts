import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../interfaces/Comment';

interface Props {
  comment: Comment,
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <p>
    <fieldset>
      <legend>
        <mark>
          This single comment is rendered by&#160;
          <b>
            &#34;CommentInfo&#34;
          </b>
          &#160;component
        </mark>
      </legend>
      <span>
        Title:&#160;&#160;
        <b data-cy="comment-name">
          {comment.name}
        </b>
        &#160;&#160;&#160;&#160;&#160;&#160;📧
        <a href={`mailto:${comment.email}`} data-cy="comment-email">{comment.email}</a>
        &#160;&#160;
        <br />
        <i data-cy="comment-body">
          {comment.body}
        </i>
      </span>
    </fieldset>
  </p>
);
