import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = (props) => {
  const { post } = props;

  return (
    <div className="container row">
      <article className="container col-md-6">
        <div className="h2">
          {`"${post.title}"`}
        </div>

        {post.user ? (<UserInfo user={post.user} />) : (
          <>
            --.
            anonym
          </>
        )}
        <p className="lead">
          {post.body}
        </p>
      </article>
      <article className="container">
        <CommentList comments={post.comments} />
      </article>
    </div>
  );
};
