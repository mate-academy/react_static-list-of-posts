import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../types/Post';

type Props = {
  props: Post[],
};

export const PostList: React.FC<Props> = ({ props = [] }) => (
  <>
    {props.map(prop => (
      <div>
        <PostInfo
          body={prop.body}
          id={prop.id}
          title={prop.title}
          user={prop.user}
          comments={prop.comments}
        />
      </div>
    ))}
  </>
);
