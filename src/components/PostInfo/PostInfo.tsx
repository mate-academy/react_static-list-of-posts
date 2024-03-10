import React from "react";
import { Post } from "../../Types/Post";
import { UserInfo } from "../UserInfo/UserInfo";
import { getUser } from "../../userHelper";
import { getPostComments } from "../../postHelper";
import { CommentList } from "../CommentList";

interface PostInfoProps {
  post: Post;
}

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const user = getUser(post.userId);
  const postComments = getPostComments(post.id);

  return (
    <div key={post.id} className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {" Posted by  "}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {postComments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={postComments} />
      )}
    </div>
  );
};
