import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { postsShape, postsCommentsShape } from './Shapes';

export const Posts = (props) => {
  const { postsComments, postsList } = props;

  return (
    <>
      {postsList.map(({ author, id, title, body }) => (
        <Fragment key={id}>
          <Post
            postId={id}
            postAuthor={author}
            postTitle={title}
            postText={body}
            comments={postsComments}
          />
        </Fragment>
      ))}
    </>
  );
};

Posts.propTypes = {
  postsList: PropTypes.arrayOf(postsShape.isRequired).isRequired,
  postsComments: postsCommentsShape.isRequired,
};
