import express from "express";
import { graphqlHTTP } from "express-graphql";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserMutationResolvers } from "./user/users.mutations.resolvers";
import { UserQueriesResolvers } from "./user/users.queries.resolvers";

async function main() {
    const schema = await buildSchema({
        resolvers: [UserMutationResolvers, UserQueriesResolvers],
        emitSchemaFile: true,
    })
    const app = express()

    app.use(
        "/graphql",
        graphqlHTTP({
            schema: schema,
        })
    )

    app.listen(8000)

    console.log("Running a GraphQL API server at http://localhost:8000/graphql")
}

main();
