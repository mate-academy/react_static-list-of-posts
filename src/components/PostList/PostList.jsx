import React from 'react';
import PropTypes from 'prop-types';
import {Post} from '../Post/Post';

import './PostList.scss';

export const PostList = ({props}) => (
  <>
    <div className="postList">
      {props.map(post => {
        const {user, commentsToPost, postCopy} = post;
        return (
          <Post
            user={user}
            commentsToPost={commentsToPost}
            postCopy={postCopy}
          />
        )})}
      <br/>
    </div>
  </>
);

PostList.propTypes = {
  props: PropTypes.array//Of({
    // commentsToPost: PropTypes.array,
    // user: PropTypes.shape({
    //   name: PropTypes.string.isRequired,
    // }),
    // postCopy:PropTypes.shape({
    //   body: PropTypes.string.isRequired,
    //   title: PropTypes.string.isRequired,
    // })
  //}),
}
