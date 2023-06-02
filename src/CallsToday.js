import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue, remove } from "firebase/database";
import "./style.css";
import { NavLink } from "react-router-dom";

function CallsToday() {
  const [dbdata, setDbdata] = useState({});

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setDbdata({});
      const data = snapshot.val();
      const currentDate = getCurrentDate();
      if (data !== null) {
        const filteredData = Object.entries(data).reduce(
          (acc, [key, value]) => {
            if (value.nextCallDate === currentDate) {
              acc[key] = value;
            }
            return acc;
          },
          {}
        );
        setDbdata(filteredData);
        console.log(dbdata);
      }
    });
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, "0");
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    return currentDate;
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure, you want to delete ?")) {
      remove(ref(db, `/${id}`));
    }
  };

  if (Object.keys(dbdata).length > 0) {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <th>Customer Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Last Call date</th>
              <th>Next Call date</th>
              <th>Calls Made</th>
              <th>Interested Machine</th>
              <th>Offered Price</th>
              <th>Interested</th>
              <th>Quotation</th>
              <th>Introduction & Video</th>
              <th>Action</th>
            </tr>

            {Object.keys(dbdata).map((id) => (
              <tr key={id}>
                <td data-title="Customer Name">{dbdata[id].customerName}</td>
                <td data-title="Phone Number">{dbdata[id].phoneNumber}</td>
                <td data-title="Address">{dbdata[id].address}</td>
                <td data-title="Last Call date">{dbdata[id].lastCallDate}</td>
                <td data-title="Next Call date">{dbdata[id].nextCallDate}</td>
                <td data-title="Calls Made">{dbdata[id].callsMade}</td>
                <td data-title="Interested Machine">
                  {dbdata[id].interestedMachine}
                </td>
                <td data-title="Offered Price">{dbdata[id].offeredPrice}</td>
                <td data-title="Interested">{dbdata[id].interested}</td>
                <td data-title="Quotation">{dbdata[id].quotation}</td>
                <td data-title="Intro & Video">
                  {dbdata[id].introductionAndVideo}
                </td>
                <td data-title="Action">
                  <div>
                    <NavLink to={`/editform/${id}`}>
                      <button className="edit-button">Edit</button>
                    </NavLink>
                    <button
                      className="delete-button"
                      onClick={() => onDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
  return <div className="no-data">OOPS, No calls today!</div>;
}

export default CallsToday;
