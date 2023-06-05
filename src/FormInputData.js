const inputAttributes = [
  {
    type: "text",
    name: "customerName",
    label: "Customer Name",
    required: true,
  },
  {
    type: "tel",
    name: "phoneNumber",
    label: "Phone Number",
    required: true,
  },
  {
    type: "text",
    name: "address",
    label: "Address",
    required: true,
  },
  {
    type: "date",
    name: "lastCallDate",
    label: "Last Call Date",
    required: true,
  },
  {
    type: "date",
    name: "nextCallDate",
    label: "Next Call Date",
    required: true,
  },
  {
    type: "radio",
    name: "interested",
    label: "Interested",
    options: [{ option: "Yes" }, { option: "No" }],
    required: true,
  },
  {
    type: "radio",
    name: "introductionAndVideo",
    label: "Introduction & Video",
    options: [{ option: "Yes" }, { option: "No" }],
    required: true,
  },
  {
    type: "radio",
    name: "quotation",
    label: "Quotation",
    options: [{ option: "Yes" }, { option: "No" }],
    required: true,
  },
  {
    type: "number",
    name: "callsMade",
    label: "Calls Made",
    required: true,
  },
  {
    type: "text",
    name: "interestedMachine",
    label: "Interested Machine",
    required: true,
  },
  {
    type: "tel",
    name: "offeredPrice",
    label: "Offered Price",
    required: true,
  },
];

export default inputAttributes;
