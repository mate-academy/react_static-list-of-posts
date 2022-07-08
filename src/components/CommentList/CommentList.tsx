import React from 'react';

import 'bulma/css/bulma.min.css';
import { Box } from 'react-bulma-components';

import { CommentInfo, Comment } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment [];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <Box>
      {comments.map(comment => {
        return (
          <CommentInfo comment={comment} key={comment.id} />
        );
      })}
    </Box>
  );
};
