import { DatePicker, Space } from "antd";
import { useState } from "react";

export default function DatePickerPage() {
  const [startDate, setStartDate] = useState(
    new Date(1900, 2, 1).toISOString()
  );
  const [endDate, setEndDate] = useState(new Date().toISOString());

  const onChangeStartDate = (date: any, dateString: any) => {
    if (date === null) {
      const aaa = new Date(1900, 2, 1);
      setStartDate(aaa.toISOString());
    } else {
      const aaa = new Date(dateString + "T00:00:00");
      setStartDate(aaa.toISOString());
    }
    console.log(startDate);
  };

  const onChangeEndDate = (date: any, dateString: any) => {
    if (date === null) {
      const aaa = new Date(3000, 2, 1);
      setEndDate(aaa.toISOString());
    } else {
      const aaa = new Date(dateString + "T00:00:00");
      setEndDate(aaa.toISOString());
    }
    console.log(endDate);
  };

  return (
    <Space direction="vertical" size={12}>
      <DatePicker onChange={onChangeStartDate} />
      <DatePicker onChange={onChangeEndDate} />
      {/* <RangePicker
        defaultValue={[moment(Today, dateFormat), moment(Today, dateFormat)]}
        onChange={onChangeStartDate}
        format={dateFormat}
      /> */}
    </Space>
  );
}
