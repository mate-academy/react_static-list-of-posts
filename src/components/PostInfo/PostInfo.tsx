import React from 'react';
import { Post } from '../../types/post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type PostDetails = {
  postInfo: Post;
};

export const PostInfo: React.FC<PostDetails> = (props) => {
  const {
    title,
    body,
    author,
    comments,
  } = props.postInfo;

  return (
    <>
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={author} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {
        comments.length === 0
          ? (
            <>
              <b data-cy="NoCommentsMessage">No comments yet</b>
            </>
          )
          : <CommentList commentsList={comments} />
      }
    </>
  );
};
