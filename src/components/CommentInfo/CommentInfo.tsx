import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { comment } = props;
  const { name, body, email } = comment;

  return (
    <article className="container">
      <header>
        {'comments by: '}
        <strong>
          {name}
        </strong>
      </header>
      <p>
        {body}
      </p>
      <footer>
        <cite title="Source Title">
          {email}
        </cite>
      </footer>
    </article>
  );
};
