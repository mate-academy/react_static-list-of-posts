import React from 'react';
import './PostList.scss';
import { User } from '../User/User';
import { Post } from '../Post/Post';
import { CommentList } from '../CommentList/CommentList';

export const PostList = ({ posts, users, comments }) => (
  posts.map(item => (
    <ul className="wrapper" key={item.id}>
      <Post part={item} />
      <User user={users.find(author => author.id === item.userId)} />
      <li>
        <CommentList filteredComments={comments.filter(comment => (
          comment.postId === item.id
        ))}
        />
      </li>
    </ul>
  ))
);
