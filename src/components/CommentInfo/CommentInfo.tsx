import React from 'react';
import { Comment } from '../../types/ReadyPosts';
import './CommentInfo.scss';
import Email from '../../public/email.png';

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
          src={Email}
          alt="IconEmail"
        />
        <p className="commentInfo__item-text">
          {comment.email}
        </p>
      </div>
    </div>
  );
};
