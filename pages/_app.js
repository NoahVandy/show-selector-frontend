import "../styles/globals.css"
import Layout from "../components/Layout"

import { UserContextDiv } from "../components/context/UserContext.js"

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"

const client = new ApolloClient({
  uri: "http://localhost:3001/graphQL",
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <UserContextDiv>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextDiv>
    </ApolloProvider>
  )
}

export default MyApp
