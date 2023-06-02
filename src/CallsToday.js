import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import "./style.css";

function CallsToday() {
  const [dbdata, setDbdata] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setDbdata([]);
      const data = snapshot.val();
      const currentDate = getCurrentDate();
      if (data !== null) {
        Object.values(data).map((dbdata) => {
          if (dbdata.nextCallDate === currentDate) {
            setDbdata((oldArray) => [...oldArray, dbdata]);
          }
          return dbdata;
        });
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
