interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo,
}

interface Geo {
  lat: string,
  lng: string,
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

interface Comments {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: number,
}

interface FullPost extends Post {
  user: User | undefined,
  comments: Comments[] | undefined,
}
