import React from 'react';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';

interface PostInfoProps {
  post: Post;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  // const thepost = postsFromServer.find((postEx) => postEx.id === post.id);
  // const user = thepost
  // ? usersFromServer.find((userEx) => userEx.id === thepost.userId)
  //   : null;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {post.user ? <UserInfo user={post.user} /> : null}

      </div>

      <p className="PostInfo__body">
        {post.body}
      </p>

      <hr />

      {post.comments !== null
        ? <CommentList comments={post.comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}
    </div>
  );
};
