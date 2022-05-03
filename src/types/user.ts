export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: UserAddress,
  phone: string,
  website: string,
  company: UserComany,
}

interface UserAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: UserAddressGeo,
}

interface UserAddressGeo {
  lat: string,
  lng: string,
}

interface UserComany {
  name: string,
  catchPhrase: string,
  bs: string,
}
