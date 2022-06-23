import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o44q850go201xic0fu708p/master',
    cache: new InMemoryCache()
})