import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';
import { Post } from '../types/Post';

type Props = {
  props: Post[];
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
