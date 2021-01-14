import React from 'react';
import { Post } from '../post/Post';
import { checkPropTypesPosts } from '../checkPropTypes/CheckPropTypesPosts';

import '../App.scss';

export const PostList = ({ mails }) => (
  <div className="post-list">
    {mails.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = checkPropTypesPosts;
