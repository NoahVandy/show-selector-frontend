import "../styles/globals.css"
import Layout from "../components/Layout"

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client"

const httpLink = createHttpLink({
  uri: "/graphql",
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
