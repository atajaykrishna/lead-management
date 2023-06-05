const inputAttributes = [
  {
    type: "text",
    name: "customerName",
    label: "Customer Name",
    pattern: "^[a-zA-Z\\s]+$",
    errorMessage: "*Customer Name should not contain digits",
  },
  {
    type: "tel",
    name: "phoneNumber",
    label: "Phone Number",
    pattern: "^[6789]\\d{9}$",
    errorMessage: "*Enter valid phone number",
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    pattern: "^[a-zA-Z0-9\\s]*$",
    errorMessage: "*Special characters are not allowed",
  },
  {
    type: "date",
    name: "lastCallDate",
    label: "Last Call Date",
    pattern: "^(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01])/(19|20)\\d{2}$",
    errorMessage: "*Enter valid date",
  },
  {
    type: "date",
    name: "nextCallDate",
    label: "Next Call Date",
    pattern: "^(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01])/(19|20)\\d{2}$",
    errorMessage: "*Enter valid date",
  },
  {
    type: "radio",
    name: "interested",
    label: "Interested",
    options: [{ option: "Yes" }, { option: "No" }],
  },
  {
    type: "radio",
    name: "introductionAndVideo",
    label: "Introduction & Video",
    options: [{ option: "Yes" }, { option: "No" }],
  },
  {
    type: "radio",
    name: "quotation",
    label: "Quotation",
    options: [{ option: "Yes" }, { option: "No" }],
  },
  {
    type: "number",
    name: "callsMade",
    label: "Calls Made",
    pattern: "^[0-9]+$",
    errorMessage: "*Enter digits between 0-9",
  },
  {
    type: "text",
    name: "interestedMachine",
    label: "Interested Machine",
    pattern: "^[a-zA-Z0-9\\s]*$",
    errorMessage: "*Special characters not allowed",
  },
  {
    type: "tel",
    name: "offeredPrice",
    label: "Offered Price",
    pattern: "^\\d+(.\\d{1,2})?$",
    errorMessage: "*Enter digits greater than 0",
  },
];

export default inputAttributes;
