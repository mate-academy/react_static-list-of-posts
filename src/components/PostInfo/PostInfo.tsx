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
    <article className="container col-lg-8">
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
      <CommentList comments={post.comments} />
    </article>
  );
};
