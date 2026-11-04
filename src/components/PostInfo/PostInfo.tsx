import React from 'react';
import { CommentList } from '../CommentList';
import { Post } from '../../types/post';

export const PostInfo: React.FC<{ post: Post }> = props => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{props.post.title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href={`mailto:${props.post.user.userEmail}`}>
            {props.post.user.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{props.post.body}</p>

      <hr />

      {props.post.comments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={props.post.comments} />
      )}
    </div>
  </>
);
