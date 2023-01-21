import { IsString } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(() => ID)
    id!: number;

    @Field()
    @IsString()
    name!: string;

    @Field()
    @IsString()
    email!: string;
}

@InputType()
export class UserInput implements Pick<User, "email" | "name"> {
    @Field()
    @IsString()
    name!: string;

    @Field()
    @IsString()
    email!: string;
}
