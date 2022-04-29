import { LinkedPost } from '../../types/LinkedPost';
import { AuthorLink } from '../AuthorLink';
import { CommentsList } from '../CommentsList';

import './PostCard.scss';

type Props = {
  post: LinkedPost;
};

export const PostCard: React.FC<Props> = ({ post }) => {
  const {
    title,
    body: content,
    user,
    comments,
  } = post;

  return (
    <div className="PostCard">
      <h2 className="PostCard__title" data-cy="post-title">
        {title}
      </h2>

      <div className="PostCard__body">
        <p className="PostCard__content" data-cy="post-body">
          {content}
        </p>

        <div className="PostCard__authorSegment">
          <AuthorLink user={user} />
        </div>

        <CommentsList comments={comments} />
      </div>
    </div>
  );
};
