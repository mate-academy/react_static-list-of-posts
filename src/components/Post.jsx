import React from 'react';
import { User } from './User';
import { CommentList } from './CommentList';
import { TypeOfPostList } from '../types';

export const Post = ({ id, body, title, author, comments }) => (
  <div style={{
    background: 'lightskyblue', padding: '20px', margin: '20px',
  }}
  >
    <div style={{
      background: 'lavender', padding: '20px',
    }}
    >
      <h2 style={{
        textAlign: 'center', color: 'dodgerblue',
      }}
      >
        Post
        {' '}
        {id}
        :
        {' '}
        <i style={{ textTransform: 'uppercase' }}>{title}</i>
      </h2>
      <article style={{ fontSize: '24px' }}>{body}</article>
      <div>
        <User {...author} />
      </div>
    </div>

    <ul>
      <h4>Comments:</h4>
      <CommentList comments={comments} />
    </ul>
  </div>
);

Post.propTypes = TypeOfPostList;
