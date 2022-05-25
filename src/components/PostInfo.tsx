import React from 'react';

type Prop = {
  post: PrepearedPostCommentsUser,
};

export const PostInfo: React.FC<Prop> = (props) => {
  const { post } = props;

  return (
    <>
      <p><strong>{post.title}</strong></p>
      POST
      <p>{post.body}</p>
    </>
  );
};
