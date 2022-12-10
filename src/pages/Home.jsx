import React from "react";
import AddNew from "../components/AddNew";
import Cards from "../components/Cards";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Search />
      <AddNew />
      <Cards />
    </div>
  );
}

export default Home;
