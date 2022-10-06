import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import commentsFromServer from '../../api/comments';
import { Comment } from '../../types/Comment';

type Props = {
  post: Post;
};

function getComments(postId: number): Comment[] {
  const foundComments
    = commentsFromServer.filter(comment => comment.postId === postId);

  return foundComments;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        {' Posted by  '}

        {post.user && (
          <UserInfo user={post.user} />
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {post.body}
    </p>

    <hr />

    {
      getComments(post.id).length
        ? <CommentList comments={getComments(post.id)} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>
    }
  </div>
);
