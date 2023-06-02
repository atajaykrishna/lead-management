import React from "react";
import HomePage from "./HomePage";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import CustomerData from "./CustomerData";
import CallsToday from "./CallsToday";

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
            <Route exact path="/editform/:id" element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
