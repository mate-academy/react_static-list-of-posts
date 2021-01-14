import React from 'react';
import { checkPropTypesPosts } from '../checkPropTypes/CheckPropTypesPosts';
import { User } from '../user/User';
import { CommentList } from '../commentlist/Commentlist';

import '../App.scss';

export const Post = ({ post }) => (
  <div className="post">
    <h1>
      {post.title}
    </h1>

    <p>
      {post.body}
    </p>

    <div>
      <User user={post.users} />
      <CommentList commentList={post.comments} />
    </div>
  </div>
);

Post.propTypes = checkPropTypesPosts;
