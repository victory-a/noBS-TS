interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

type MyUserCopy = Partial<MyUser>;
type MyRequiredUser = Required<MyUser>;
type EmailAndName = Pick<MyUser, "email" | "name">;

const merge = (user: MyUser, optionals: MyUserCopy): MyUser => {
  return {
    ...user,
    ...optionals,
  };
};

type UserWithoutId = Omit<MyUser, "id">
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutId> => {
  return users.reduce((a, v) => {
    const {id, ...rest} = v
    return {
      ...a,
      [id]: rest
    };
  }, {});
}


const usersArr = [
  {id: "foo", name: "bar"},
  {id: "jo", name: "deep"},
]
console.log(mapById(usersArr))