/// <reference types="react-scripts" />

interface PostComment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface User {
  id: number,
  name: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

interface PreparedPost extends Post{
  user: User | null,
  comments: PostComment[],
}
