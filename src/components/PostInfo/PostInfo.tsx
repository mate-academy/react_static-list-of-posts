import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Post } from '../../types/Post';

import './PostInfo.scss';

export const PostInfo: React.FC<Post> = ({ ...post }) => (
  <li className="postInfo" key="post.id">
    <h2>
      {post.title}
    </h2>
    <h3>
      { (post.user)
        ? (<UserInfo {...post.user} />)
        : null }
    </h3>

    <p>
      {post.body}
    </p>

    { (post.comments)
      ? (
        <CommentInfo {...post.comments} />
        // <ul className="postList">
        //   {
        //     post.comments.map(comment => (
        //       <CommentInfo {...comment} />
        //     ))
        //   }
        //   ghjklkjhg
        // </ul>
      )
      : 'Be the first to comment!'}
  </li>
);
