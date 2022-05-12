import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_API_URL || ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
  }
})

export default client
