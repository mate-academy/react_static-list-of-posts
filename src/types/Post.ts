export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
  user?: {
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
  },
  comment: {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }[]
}