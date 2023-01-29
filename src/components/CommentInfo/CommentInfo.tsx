import { FC } from 'react';

import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: FC<Props> = ({
  comment: {
    email,
    name,
    body,
  },
}) => {
  const emailString = `mailto:${email}`;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {name}
        </strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={emailString}
        >
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};
