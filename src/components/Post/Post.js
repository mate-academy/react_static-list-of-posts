import React from 'react';

import { User } from '../User';
import { CommentList } from '../CommentList';
import { UserTypes } from '../../type';

export const Post = ({ title, body, user, comments }) => (
  <div>
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <User {...user} />
    </div>

    <CommentList comments={comments} />
  </div>
);

Post.propTypes = UserTypes.isRequired;
