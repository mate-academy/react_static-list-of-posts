import React from 'react';
import { Post } from '../../types/Post';

export const PostList: React.FC<{ postsList: Post[] }> = ({ postsList }) => {
  return (
    <div className="PostList">
      {postsList.map(post => (
        <div key={post.id} className="PostInfo">
          <div className="PostInfo__header">
            <h3 className="PostInfo__title">{post.title}</h3>

            <p>
              {' Posted by  '}

              <a className="UserInfo" href="mailto:Sincere@april.biz">
                {post.user?.name}
              </a>
            </p>
          </div>

          <p className="PostInfo__body">{post.body}</p>

          <hr />

          {post.comments ? (
            <div className="CommentList">
              {post.comments.map(comment => (
                <div key={comment.id} className="CommentInfo">
                  <div className="CommentInfo__title">
                    <strong className="CommentInfo__name">
                      {comment.name}
                    </strong>

                    {' by '}

                    <a
                      className="CommentInfo__email"
                      href={`mailto:${comment.email}`}
                    >
                      {comment.email}
                    </a>
                  </div>

                  <div className="CommentInfo__body">{comment.body}</div>
                </div>
              ))}
            </div>
          ) : (
            <b data-cy="NoCommentsMessage">No comments yet</b>
          )}
        </div>
      ))}
    </div>
  );
};
