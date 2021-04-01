import React from 'react';
import './postList.scss';
import { Post } from '../Post';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const PostList = ({ list }) => (
  list.map(item => (
    <div key={item.id} className="list__item">
      <Post {...item} />
      <User {...item.user} />
      <CommentList comments={item.comments} />
    </div>
  ))
);
