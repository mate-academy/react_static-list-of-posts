import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';
import { PreparedData } from '../../react-app-env';

export interface Props {
  preparedposts: PreparedData[];
}

export const PostList: React.FC<Props> = ({ preparedposts = [] }) => (

  <>
    {preparedposts.map(post => (
      <React.Fragment key={post.id}>
        <PostInfo post={post} />
      </React.Fragment>
    ))}
  </>
);
