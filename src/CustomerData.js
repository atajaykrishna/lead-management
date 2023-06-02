import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue, remove } from "firebase/database";
import "./style.css";
import { NavLink } from "react-router-dom";

function CustomerData() {
  const [dbdata, setDbdata] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setDbdata([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((dbdata) =>
          setDbdata((oldArray) => [...oldArray, dbdata])
        );
      }
    });
  }, []);

  const onDelete = (data) => {
    if (window.confirm("Are you sure, you want to delete ?")) {
      remove(ref(db, `/${data.uuid}`));
    }
  };

  if (dbdata.length > 0) {
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
            {dbdata.map((data) => (
              <tr key={data.uuid}>
                <td data-title="Customer Name">{data.customerName}</td>
                <td data-title="Phone Number">{data.phoneNumber}</td>
                <td data-title="Address">{data.address}</td>
                <td data-title="Last Call date">{data.lastCallDate}</td>
                <td data-title="Next Call date">{data.nextCallDate}</td>
                <td data-title="Calls Made">{data.callsMade}</td>
                <td data-title="Interested Machine">
                  {data.interestedMachine}
                </td>
                <td data-title="Offered Price">{data.offeredPrice}</td>
                <td data-title="Interested">{data.interested}</td>
                <td data-title="Quotation">{data.quotation}</td>
                <td data-title="Intro & Video">{data.introductionAndVideo}</td>
                <td data-title="Action">
                  <div>
                    <NavLink to={`/editform/${data.uuid}`}>
                      <button className="edit-button">Edit</button>
                    </NavLink>
                    <button
                      className="delete-button"
                      onClick={() => onDelete(data)}
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
  return <div className="no-data">OOPS, No Customer Data Found!</div>;
}

export default CustomerData;
