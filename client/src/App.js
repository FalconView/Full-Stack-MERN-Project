import Header from "./components/Header";
import { ApolloProvider, ApolloeClient, InMemoryCache } from "@apollo/client";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </>
  );
}

export default App;
