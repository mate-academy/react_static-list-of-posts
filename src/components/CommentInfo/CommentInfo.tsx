import React from 'react';
import { Comments } from '../../types/Comments';

interface Props {
  comment: Comments;
}

export const CommentInfo: React.FC<Props> = (props) => (
  <>
    <div className="CommentInfo" key={props.comment.id}>
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{props.comment.name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`mailto:${props.comment.email}`}
        >
          {props.comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {props.comment.body}
      </div>
    </div>
  </>
);
