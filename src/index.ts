import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { UserResolvers } from './user/user.resolvers';

async function main() {
    const schema = await buildSchema({
        resolvers: [UserResolvers],
        emitSchemaFile: true,
        // validate: (argValue, argType) => {
        //     // call joiful validate
        //     console.log(JSON.stringify(argValue))
        //     console.log(JSON.stringify(argType))
        //     // if (error) {
        //     //     console.log(error)
        //     //     // throw error on failed validation
        //     //     throw error;
        //     // }
        // },
    });
    const app = express();

    app.use(
        '/graphql',
        graphqlHTTP({
            schema: schema,
        })
    );

    const PORT = 8080;

    app.listen(PORT);

    console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);

    console.log(`Test`);
}

main();
