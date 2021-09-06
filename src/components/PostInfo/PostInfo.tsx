import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="container">
      <article className="container-article">
        <div className="h2">
          {`"${title}"`}
        </div>

        {user ? (<UserInfo user={user} />) : (
          <>
            --.
            anonym
          </>
        )}
        <p className="paragraph">
          {body}
        </p>
      </article>
      <article className="container-article">
        <CommentList comments={comments} />
      </article>
    </div>
  );
};
