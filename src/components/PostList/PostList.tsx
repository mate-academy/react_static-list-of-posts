import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentInfo } from '../CommentInfo';

import './PostList.scss';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <ul className="post">
      {posts.map(post => (
        <li className="post__item" key={post.id}>
          <>
            <p className="post__item-title">{post.title}</p>
            <p className="post__item-body">{post.body}</p>
            {post.user && <UserInfo user={post.user} />}
            <CommentInfo comments={post.comments} />
          </>
        </li>
      ))}
    </ul>
  );
};
