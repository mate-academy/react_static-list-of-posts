import React from 'react';

type Props = {
  title: string;
  userEmail: string;
  commentText: string;
};

export const CommentInfo: React.FC<Props> = props => {
  const {
    title,
    userEmail,
    commentText,
  } = props;

  return (
    <div className="post__comment">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="User avatar" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-6">{userEmail}</p>
        </div>
      </div>

      <div className="content">
        <p className="title is-size-4 mb-5">{title}</p>
        {commentText}
      </div>
    </div>
  );
};
