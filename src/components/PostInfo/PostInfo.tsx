import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    comments,
    title,
    body,
  } = post;

  return (
    <article className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title title is-4 mb-2">
          {title}
        </h3>

        {user && (
          <p className="is-flex is-align-items-center">
            Posted by
            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body block is-size-5">
        {body}
      </p>

      {comments.length
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />
            <strong
              className="is-size-5"
              data-cy="NoCommentsMessage"
            >
              No comments yet
            </strong>
          </>
        )}
    </article>
  );
};
