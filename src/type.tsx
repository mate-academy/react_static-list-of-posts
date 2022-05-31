export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
};

export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
};

export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
};

export type Prepared = {
  userId: number,
  id: number,
  title: string,
  body: string,
  user: User | undefined,
  comments: Comment[],
};

export type Props = {
  prepared: Prepared[];
};

export type ComObj = {
  comms: Comment[];
};

export type Comm = {
  name: string | undefined,
  email: string | undefined,
  body?: string,
};
