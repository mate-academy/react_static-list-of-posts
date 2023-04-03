import React from 'react';
import { Comment } from '../../types/Comment';
import { Post } from '../../types/Post';
import { User } from '../../types/User';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
  users: User[];
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({ post, users, comments }) => {
  const user: User | undefined
  = users.find(person => person.id === post.userId);
  const commentSection: Comment[] | undefined
 = comments.filter(comment => comment.postId === post.id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        {user && <UserInfo name={user.name} email={user.email} />}

        <p className="PostInfo__body">
          {post.body}
        </p>

        {commentSection.length
          ? <CommentList comments={commentSection} />
          : (
            <>
              <hr />
              <b data-cy="NoCommentsMessage">No comments yet</b>
            </>
          )}
      </div>
    </div>
  );
};
