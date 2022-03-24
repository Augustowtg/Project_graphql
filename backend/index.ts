import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

async function main() {

    // Criação do schema
    const schema = await buildSchema({
        resolvers: [],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    // Criação do server 
    const server = new ApolloServer({
        schema,
    })/
    
     const { url } = await server.listen()

     console.log(`Server running on ${url}`);
}

main();