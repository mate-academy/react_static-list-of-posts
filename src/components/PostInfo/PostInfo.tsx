import React from 'react';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';
import { PostsData } from '../../types/PostsData';

interface PostInfoProps {
  post: PostsData,
}

export const PostInfo: React.FC<PostInfoProps> = (props) => {
  const { post } = props;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>
        <p>
          {' Posted by  '}
          {post.user && <UserInfo user={post.user} />}
        </p>
        <p className="PostInfo__body">
          {post.body}
        </p>
        {
          post.comments.length
            ? <CommentList comments={post.comments} />
            : (
              <>
                <hr />
                <b data-cy="NoCommentsMessage">No comments yet</b>
              </>
            )
        }
      </div>
    </div>
  );
};
