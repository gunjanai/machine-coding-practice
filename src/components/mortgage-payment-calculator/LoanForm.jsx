import { useState } from "react";
import InputComponent from "./InputComponent";

function LoanForm() {
  const [loanData, setLoanData] = useState({
    amount: 0,
    interestRate: 0,
    term: 0,
  });
  const [warning, setWarning] = useState({
    amount: "",
    interestRate: "",
    term: "",
  });

  const handleChange = (name, value) => {
    if (value === "" || !isNaN(value)) {
      setLoanData((prev) => ({ ...prev, [name]: value }));
      setWarning((prev) => ({
        ...prev,
        [name]: "",
      }));
    } else {
      setWarning((prev) => ({
        ...prev,
        [name]: "Please enter a valid number",
      }));
    }
  };

  return (
    <div className="flex flex-col items-center h-[100vh] bg-teal-800">
      <InputComponent
        name={"amount"}
        value={loanData.amount}
        onChange={handleChange}
        warning={warning}
      />
      <InputComponent
        name={"interestRate"}
        value={loanData.interestRate}
        onChange={handleChange}
        warning={warning}
      />
      <InputComponent
        name={"term"}
        value={loanData.term}
        onChange={handleChange}
        warning={warning}
      />
    </div>
  );
}

export default LoanForm;
