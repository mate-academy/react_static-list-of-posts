import React from 'react';
import Post from './Post';
import {posts} from './posts';
import {users} from './users';

function PostList() {
  const listOfPosts = [];
  const usersObj = {};
  const usersObjEmail = {};
  
  for (let user of users) {
    usersObj[user.id] = user;
  }


  for (let user of users) {
    usersObjEmail[user.email] = user.name;
  }
  console.log(usersObjEmail);

  for(let post of posts) {
    const name = usersObj[post.userId].name;
    const email = usersObj[post.userId].email;
    const mailto = "mailto:" + email;
    const street = usersObj[post.userId].address.street;
    const city = usersObj[post.userId].address.city;
    const suite = usersObj[post.userId].address.suite;
    const zipcode = usersObj[post.userId].address.zipcode;
    const lat = usersObj[post.userId].address.geo.lat;
    const lng = usersObj[post.userId].address.geo.lng;

    listOfPosts.push(
      <Post title ={post.title}
            text = {post.body}
            author = {name}
            email = {email}
            mailto = {mailto}
            street = {street}
            city = {city}
            zipcode = {zipcode}
            suite = {suite}
            lat = {lat}
            lng = {lng}
            id = {post.id}
            emailObj = {usersObjEmail}
            commentAuthor = 'AAA'
           />
    );
  }

  return(
    <div>
     {listOfPosts}
    </div>
  )
}

export default PostList;