import React from 'react';

import { User } from '../User';
import { CommentList } from '../CommentList';
import { PostShape } from '../../shapes/PostShape';

export const Post = ({ title, body, user, comments }) => (
  <div className="card rounded mb-3">
    <div className="bg-info text-white">
      <h5 className="card-title card-header">{ title }</h5>
      <p className="card-text card-body">{ body }</p>
      <User {...user} />
    </div>
    <CommentList comments={comments} />
  </div>
);

Post.propTypes = PostShape;
