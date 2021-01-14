import React from 'react';
import { User } from './User';
import { PostType } from './Types';
import { CommentList } from './CommentList';

export const Post = ({ title, body, user, preparedComments }) => (
  <>
    <h2>
      <strong>
        {title}
      </strong>
    </h2>

    <p>
      {body}
    </p>
    <User {...user} />
    <CommentList comments={preparedComments} />
  </>
);

Post.propTypes = PostType;
