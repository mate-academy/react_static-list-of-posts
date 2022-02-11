import React from 'react';
import { Post } from '../../types';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Prop = {
  props: Post[],
};

export const PostInfo: React.FC<Prop> = ({ props }) => {
  return (
    <>
      {props.map((prop: Post) => (
        <div key={prop.id} className="post">
          <h2>{prop.title}</h2>
          {prop.user && <UserInfo user={prop.user} />}
          <div>{prop.body}</div>
          {prop.comments && <CommentInfo postComments={prop.comments} />}
        </div>
      ))}
    </>
  );
};
