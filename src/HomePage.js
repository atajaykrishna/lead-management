import React, { useEffect, useState } from "react";
import InputTextBox from "./InputTextBox";
import RadioButton from "./RadioButton";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue, update } from "firebase/database";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";

function HomePage() {
  const [text, setText] = useState({
    customerName: "",
    phoneNumber: "",
    address: "",
    lastCallDate: "",
    nextCallDate: "",
    callsMade: "",
    interestedMachine: "",
    offeredPrice: "",
  });

  const [radio, setRadio] = useState({
    interested: "",
    introductionAndVideo: "",
    quotation: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "customerName",
      label: "Customer Name",
      required: true,
    },
    {
      id: 3,
      type: "text",
      name: "phoneNumber",
      label: "Phone Number",
      required: true,
    },
    {
      id: 6,
      type: "text",
      name: "address",
      label: "Address",
      required: true,
    },
    {
      id: 7,
      type: "date",
      name: "lastCallDate",
      label: "Last Call Date",
      required: true,
    },
    {
      id: 8,
      type: "date",
      name: "nextCallDate",
      label: "Next Call Date",
      required: true,
    },
    {
      id: 9,
      type: "text",
      name: "callsMade",
      label: "Calls Made",
      required: true,
    },
    {
      id: 10,
      type: "text",
      name: "interestedMachine",
      label: "Interested Machine",
      required: true,
    },
    {
      id: 11,
      type: "text",
      name: "offeredPrice",
      label: "Offered Price",
      required: true,
    },
  ];

  const radioInput = [
    {
      id: 2,
      type: "radio",
      name: "interested",
      label: "Interested",
      options: [{ option: "Yes" }, { option: "No" }],
      required: true,
    },
    {
      id: 4,
      type: "radio",
      name: "quotation",
      label: "Quotation",
      options: [{ option: "Yes" }, { option: "No" }],
      required: true,
    },
    {
      id: 5,
      type: "radio",
      name: "introductionAndVideo",
      label: "Introduction & Video",
      options: [{ option: "Yes" }, { option: "No" }],
      required: true,
    },
  ];

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      customerName,
      phoneNumber,
      address,
      lastCallDate,
      nextCallDate,
      callsMade,
      interestedMachine,
      offeredPrice,
    } = text;
    const { interested, introductionAndVideo, quotation } = radio;

    if (!id) {
      const uuid = uid();
      set(ref(db, `/${uuid}`), {
        uuid,
        customerName,
        phoneNumber,
        address,
        lastCallDate,
        nextCallDate,
        callsMade,
        interestedMachine,
        offeredPrice,
        interested,
        introductionAndVideo,
        quotation,
      });

      setText({
        customerName: "",
        phoneNumber: "",
        address: "",
        lastCallDate: "",
        nextCallDate: "",
        callsMade: "",
        interestedMachine: "",
        offeredPrice: "",
      });
      setRadio({
        interested: "",
        introductionAndVideo: "",
        quotation: "",
      });
    } else {
      update(ref(db, `/${id}`), {
        id,
        customerName,
        phoneNumber,
        address,
        lastCallDate,
        nextCallDate,
        callsMade,
        interestedMachine,
        offeredPrice,
        interested,
        introductionAndVideo,
        quotation,
      });
      setTimeout(() => navigate("/customerdata"), 500);
    }
  };

  const onChange = (event) => {
    //console.log(event.target.value);
    setText((prevtext) => ({
      ...prevtext,
      [event.target.name]: event.target.value,
    }));
  };

  const onChangeRadio = (event) => {
    //console.log(event.target.value);
    setRadio((prevRadio) => ({
      ...prevRadio,
      [event.target.name]: event.target.value,
    }));
  };

  const [dbdata, setDbdata] = useState({});

  const { id } = useParams();

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setDbdata({});
      const data = snapshot.val();
      if (data !== null) {
        setDbdata({ ...data });
      }
    });
  }, [id]);

  useEffect(() => {
    if (id) {
      setText({ ...dbdata[id] });
    } else {
      setText({});
    }
  }, [id, dbdata]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <InputTextBox
            key={input.id}
            {...input}
            value={text[input.name] || "  "}
            onChange={onChange}
          />
        ))}

        {radioInput.map((radioo) => (
          <RadioButton key={radioo.id} {...radioo} onChange={onChangeRadio} />
        ))}
        <br />
        <br />
        <input
          className="submit-button"
          type="submit"
          value={id ? "Update" : "Save"}
        />
      </form>
    </div>
  );
}

export default HomePage;
