import React from 'react';
import { PostType } from '../../types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comment }) => (
  <>
    <strong>{title}</strong>
    <p>
      <i>
        {body}
      </i>
    </p>
    <User {...user} />
    <CommentList comment={comment} />
  </>
);

Post.propTypes = PostType;
