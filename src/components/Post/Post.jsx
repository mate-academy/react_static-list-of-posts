import React from 'react';
import { PostPropTypes } from '../../types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ title, body, user, comments }) => (
  <div className="columns">
    <div className="column">
      <h2 className="title is-2 message-header is-uppercase">
        {title}
      </h2>
      <p className="is-size-4 pb-4">
        {body}
      </p>
      <User {...user} />
    </div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostPropTypes;
