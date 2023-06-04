import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, update } from "firebase/database";
import "../style.css";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import inputAttributes from "../FormInputData";

function HomePage() {
  const initialFormData = {
    customerName: "",
    phoneNumber: "",
    address: "",
    lastCallDate: "",
    nextCallDate: "",
    callsMade: "",
    interestedMachine: "",
    offeredPrice: "",
    interested: "",
    introductionAndVideo: "",
    quotation: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [dbdata, setDbdata] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      const uuid = uid();

      try {
        set(ref(db, `/${uuid}`), formData);

        setFormData(initialFormData);

        setTimeout(() => {
          toast.success("Successfully saved data!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }, 1000);
      } catch (error) {
        toast.error("Data not saved, Please try again!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else {
      try {
        update(ref(db, `/${id}`), formData);

        setTimeout(() => {
          toast.success("Successfully updated data!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }, 1000);
      } catch (error) {
        toast.error("Data not updated, Please try again!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }

    setTimeout(() => navigate("/customerdata"), 500);
  };

  const onInputChange = (event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  };

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
      setFormData({ ...dbdata[id] });
    } else {
      setFormData({});
    }
  }, [id, dbdata]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {inputAttributes.map((field, index) => (
          <div key={field.name}>
            <label className="label-container" htmlFor={field.name}>
              {field.label} :
            </label>
            {field.type === "radio" ? (
              <div className="formInput">
                {field.options.map((option, optionIndex) => (
                  <label key={optionIndex}>
                    <input
                      type={field.type}
                      name={field.name}
                      value={option.option}
                      checked={formData[field.name] === option.option}
                      onChange={(e) => onInputChange(e)}
                      required={field.required}
                    />
                    {option.option}
                  </label>
                ))}
              </div>
            ) : (
              <div className="formInput">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={(e) => onInputChange(e)}
                  required={field.required}
                />
                <span>{field.errorMessage}</span>
              </div>
            )}
          </div>
        ))}
        <input
          className="submit-button"
          type="submit"
          value={id ? "Update" : "Save"}
        />
        <ToastContainer />
      </form>
    </div>
  );
}

export default HomePage;
