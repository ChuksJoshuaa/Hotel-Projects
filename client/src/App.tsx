import React from "react";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Login,
  Home,
  SingleBrand,
  Register,
  SingleHotel,
  AddHotel,
  AddBrand,
  FilteredHotels,
  ErrorPage,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        me: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        brands: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
  credentials: "include",
  // headers: {
  //   cookie:
  //     (typeof window === "undefined" ? ctx?.req?.headers.cookie : undefined) ||
  //     "",
  // },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Lobster+Two&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
          rel="stylesheet"
        ></link>
        <Router>
          <Navbar />
          {/* {isOpen && <Sidebar />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/hotels/:id" element={<SingleHotel />} />
            <Route path="/brands/:id" element={<SingleBrand />} />
            <Route path="/add-hotel" element={<AddHotel />} />
            <Route path="/add-brand" element={<AddBrand />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/filtered-hotels/:id" element={<FilteredHotels />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
