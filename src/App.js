import React from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import CustomerData from "./components/CustomerData";
import CallsToday from "./components/CallsToday";

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route
              exact
              path="/customerdata"
              element={<CustomerData />}
            ></Route>
            <Route exact path="/callstoday" element={<CallsToday />}></Route>
            <Route exact path="/update/:id" element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
