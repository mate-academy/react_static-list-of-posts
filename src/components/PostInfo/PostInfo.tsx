import React from 'react';
import { Post } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Prop = {
  posts: Post[],
};

export const PostInfo: React.FC<Prop> = ({ posts }) => {
  return (
    <>
      {posts.map((prop: Post) => (
        <div key={prop.id} className="post">
          <h2>{prop.title}</h2>
          {prop.user && <UserInfo user={prop.user} />}
          <div>{prop.body}</div>
          {prop.comments && <CommentList postComments={prop.comments} />}
        </div>
      ))}
    </>
  );
};
