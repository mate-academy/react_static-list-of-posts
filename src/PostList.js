import React from 'react';
import PropTypes from 'prop-types';

import User from './User';
import CommentList from './CommentList';

const PostList = ({ post }) => (
  <section>
    <h1 className ="PostList__title"> List of posts </h1>
    {post.map(post => (
      <article className ="PostList__items">
        <div className="title-group">
          <span className="PostList__user">
            <User userId={post.userId} />
            :
            </span>
          <span className="title"> {post.title}</span>
        </div>
        <span>
          {post.body}
        </span>
        <span>
          <CommentList comments={post.comments} />
        </span>
      </article>
    )
    )}
  </section>
)

PostList.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired
};

export default PostList;
