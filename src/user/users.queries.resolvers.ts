import { Arg, Query, Resolver } from "type-graphql"
import { User } from "./users.schema"

@Resolver(() => User)
export class UserQueriesResolvers {
  private users: User[] = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
    { id: 2, name: "Jane Doe", email: "janedoe@gmail.com" },
    { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com" },
  ]

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return this.users
  }

  @Query(() => User)
  async getUser(@Arg("id") id: number): Promise<User | undefined> {
    const user = this.users.find((u) => u.id === id)
    return user
  }
}