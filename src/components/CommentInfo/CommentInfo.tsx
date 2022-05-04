import React from 'react';
import { Comment } from '../../types/ReadyPosts';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="commentInfo">
      <div className="commentInfo__item" data-cy="comment-name">
        <img
          className="postInfo__title-image"
          src="https://img.icons8.com/ios/50/000000/tag-window.png"
          alt="TitleImage"
        />
        <p className="commentInfo__item-text">
          {comment.name}
        </p>
      </div>

      <div className="commentInfo__item" data-cy="comment-body">
        <img
          className="postInfo__body-image"
          src="https://img.icons8.com/ios/50/000000/document--v1.png"
          alt="BodyImage"
        />
        <span className="commentInfo__item-text">
          {comment.body}
        </span>
      </div>

      <div
        className="commentInfo__item commentInfo__item--email"
        data-cy="comment-email"
      >
        <img
          className="UserInfo__image"
          // eslint-disable-next-line
          src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/64/000000/external-email-communication-nawicon-detailed-outline-nawicon-2.png"
          alt="IconEmail"
        />
        <p className="commentInfo__item-text">
          {comment.email}
        </p>
      </div>
    </div>
  );
};
