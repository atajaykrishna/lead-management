import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, update } from "firebase/database";
import "../components/styles/HomePage.css";
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
  const [formError, setFormError] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateFormOnSubmit();

    if (Object.keys(isValid).length === 0) {
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
          setTimeout(() => navigate("/customerdata"), 500);
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
          setTimeout(() => navigate("/customerdata"), 500);
        } catch (error) {
          toast.error("Data not updated, Please try again!", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    } else {
      toast.error("Please enter valid input(s)", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
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
    if (id && dbdata[id]) {
      setFormData({ ...dbdata[id] });
    } else {
      setFormData(initialFormData);
    }
  }, [id, dbdata]);

  const validateFormOnSubmit = () => {
    const errorObj = {};
    inputAttributes.map((fields) => {
      var patterns = new RegExp(fields.pattern);

      if (formData[fields.name] === "") {
        errorObj[fields.name] = "* " + fields.label + " is Required *";
      } else if (fields.type === "date") {
        const newDate = new Date(formData[fields.name]);

        let Day = String(newDate.getDate()).padStart(2, "0");
        let Month = String(newDate.getMonth() + 1).padStart(2, "0");
        let Year = newDate.getFullYear();
        const formatedDate = `${Month}/${Day}/${Year}`;

        if (!patterns.test(formatedDate)) {
          errorObj[fields.name] = fields.errorMessage;
        }
      } else if (patterns && !patterns.test(formData[fields.name])) {
        errorObj[fields.name] = fields.errorMessage;
      }

      if (formData["nextCallDate"] && formData["lastCallDate"]) {
        const date1 = new Date(formData["nextCallDate"]);
        const date2 = new Date(formData["lastCallDate"]);

        if (date2 > date1) {
          errorObj["nextCallDate"] =
            "Next call date should be later than last call date";
        }
      }
      return false;
    });

    setFormError({ ...errorObj });
    return errorObj;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {inputAttributes.map((field, index) => (
          <div key={field.name}>
            <label className="label-container" htmlFor={field.name}>
              {field.label} :
            </label>
            {field.type === "radio" ? (
              <>
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
                <span>{formError[field.name]}</span>
              </>
            ) : (
              <div className="formInput">
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={(e) => onInputChange(e)}
                  required={field.required}
                />
                <span>{formError[field.name]}</span>
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
