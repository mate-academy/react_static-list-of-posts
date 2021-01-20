import React from 'react';

import { PostTypes } from '../../types';

import { User } from '../User';
import { CommentList } from '../Comments';

export const Post = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <h2 className="post-title">{title}</h2>
    <p>{body}</p>
    <User {...user} />
    <CommentList comments={comments} />
  </>
);

Post.propTypes = PostTypes.isRequired;
