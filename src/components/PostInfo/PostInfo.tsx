import React from 'react';

import UserInfo from '../UserInfo';
import CommentList from '../CommentList';

type Props = {
  posts: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <div className="card-body">
      <h1 className="card-title">{`Title: ${posts.title}`}</h1>
      <p className="card-text">{posts.body}</p>

      {posts.person && (<UserInfo user={posts.person} />)}

      {posts.comments && (<CommentList comments={posts.comments} />)}

    </div>
  );
};
