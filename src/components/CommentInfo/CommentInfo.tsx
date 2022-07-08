import React from 'react';

import 'bulma/css/bulma.min.css';
import { Box, Heading, Tag } from 'react-bulma-components';

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <Box className="">
      <Heading subtitle weight="semibold" size={6} data-cy="comment-name">
        {comment.name}
      </Heading>
      <p data-cy="comment-body">
        {comment.body}
      </p>
      <Tag>
        <p data-cy="comment-email">
          {comment.email}
        </p>
      </Tag>

    </Box>
  );
};
