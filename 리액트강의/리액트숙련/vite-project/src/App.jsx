import React from "react";
import AddData from "./components/AddData";
import DeletaData from "./components/DeletaData";
import FetchData from "./components/FetchData";
import UpdateData from "./components/UpdateData";

const App = () => {
  return (
    <div>
      <h1>supabase</h1>
      <DeletaData />
      <AddData />
      <UpdateData />
      <FetchData />
    </div>
  );
};

export default App;
