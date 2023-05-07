import React from 'react';
import { Comment } from '../../types/Comment';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
// import { CommentList } from '../CommentList';
import commentsFromServer from '../../api/comments';
import { CommentList } from '../CommentList';

interface PostInfoProps {
  postInfo: Post
}

export const PostInfo: React.FC<PostInfoProps> = ({
  postInfo: {
    title, body, user, id,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user ? <UserInfo userInfo={user} /> : undefined}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {commentsFromServer.find((comment: Comment) => (
      comment.postId === id
    ))
      ? (
        <CommentList commentList={
          commentsFromServer.filter((comment: Comment) => (
            comment.postId === id
          ))
        }
        />
      )
      : (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}

  </div>
);
