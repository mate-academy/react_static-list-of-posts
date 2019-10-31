import React from 'react';
import unionList from './Union';

function List() {
  let postTitle;
  let postBody;
  let postAuthor;
  let postAuthorEmail;
  let postAuthorAddress;
  let postComennts;

  const result = [];

  unionList.forEach((element) => {
    postTitle = element.title;
    postBody = element.body;
    postAuthor = element.userId.name;
    postAuthorEmail = element.userId.email;
    postAuthorAddress = `${element.userId.address.city},
                         ${element.userId.address.street},
                         ${element.userId.address.suite}`;
    postComennts = element.postComments.map(
      (item, i) => (
        <p>
          {i + 1}
          .
          Comment:
          {item.body}
          ,
          Name:
          {item.name}
          ,
          Email:
          {item.email}
        </p>
      )
    );

    result.push(
      <article>
        <h2>Title</h2>
        <h3>{postTitle}</h3>
        <h2>Post</h2>
        <h4>{postBody}</h4>
        <div>
          <h5>
            Author:
            {postAuthor}
          </h5>
          <p>
            Email:
            {postAuthorEmail}
          </p>
          <p>
            Address:
            {postAuthorAddress}
          </p>
        </div>
        <div>
          <h5>{postComennts}</h5>
        </div>
      </article>
    );
  });

  return result;
}

export default List;
