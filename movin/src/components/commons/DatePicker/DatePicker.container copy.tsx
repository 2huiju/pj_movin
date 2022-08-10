import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { getDate } from "../../../commons/libraries/utils";

export default function DatePickerPage2() {
  const Today = getDate(new Date()).slice(0, 10);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dateToString = (date) => {
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0")
    );
  };

  const onChangeStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const onChangeEndDate = (event) => {
    setEndDate(event.target.value);
  };

  // const ExampleCustomInput = ({ value, onClick }) => (
  //   <button className="example-custom-input" onClick={onClick}>
  //     {value}
  //   </button>
  // );

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        // customInput={<ExampleCustomInput />}
      />
      <DatePicker
        selected={endDate}
        selectsEnd
        startDate={startDate}
        minDate={startDate}
        maxDate={new Date()}
        onChange={onChangeEndDate}
        // customInput={<ExampleCustomInput />}
      />
    </>
  );
}
