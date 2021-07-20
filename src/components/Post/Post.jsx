import React from 'react';
import PropTytpes from 'prop-types';
import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className="list-li">
      <h1>
        {`Post about: ${title}`}
      </h1>
      <h3 className="list-content">
        {body}
      </h3>
      <h2>
        <User user={user} />
      </h2>
      <h3>
        <CommentList comments={comments} />
      </h3>
    </div>
  );
};

Post.propTypes = {
  post: PropTytpes.shape({
    title: PropTytpes.string.isRequired,
    user: PropTytpes.object.isRequired,
    body: PropTytpes.string.isRequired,
    comments: PropTytpes.arrayOf.isRequired,
  }).isRequired,
};
