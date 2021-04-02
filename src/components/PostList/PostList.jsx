import React from 'react';
import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';

import './postList.scss';

export const PostList = ({ list }) => (
  list.map(item => (
    <div key={item.id} className="postList">
      <Post {...item} />
      <User {...item.user} />
      <CommentList comments={item.comments} />
    </div>
  ))
);
