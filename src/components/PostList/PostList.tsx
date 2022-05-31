import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

interface Prop {
  postArray: PreparedPosts[]
}

export const PostList: React.FC<Prop> = ({ postArray }) => (
  <div>
    <ul className="content">
      {postArray.map(post => (
        <li
          data-cy="post-info"
          key={+`${post.id}`}
          className="box message"
        >
          <PostInfo post={post} />
        </li>
      ))}
    </ul>
  </div>

);
