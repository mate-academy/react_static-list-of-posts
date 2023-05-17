import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/post';
import { findUserByPost } from '../../helpers/findUserByPost';
import { User } from '../../types/user';
import { CommentList } from '../CommentList';
import { findComments } from '../../helpers/findComments';
import { Comment } from '../../types/comment';

interface Props {
  post: Post;
  users: User[];
  comments: Comment[];
}

export const PostInfo: React.FC<Props> = ({ post, users, comments }) => {
  const user = findUserByPost(post, users);
  const postComments = findComments(comments, post);

  const { title, body } = post;
  const { name, email } = user ?? {};

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <p>
            {' Posted by  '}

            <a className="UserInfo" href={`mailto:${email}`}>
              {name}
            </a>
          </p>
        )}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {postComments.length ? (
        <CommentList comments={postComments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}

    </div>
  );
};
