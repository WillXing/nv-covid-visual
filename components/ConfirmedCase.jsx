import { useState } from "react";
import TitleDrawerSelector from "./TitleDrawerSelector";
import CaseDetailChart from "./CaseDetailChart";
import rawData from "../public/data.json";

const ConfirmedCase = () => {
  const [title, setTitle] = useState({
    label: "Age Group",
    keyword: "ageGroup",
    chartType: "Pie",
  });
  const titles = [
    { label: "Age Group", keyword: "ageGroup", chartType: "Pie" },
    { label: "Sex", keyword: "sex", chartType: "Pie" },
    { label: "DHB", keyword: "DHB", chartType: "Pie" },
    { label: "Oversea Travel", keyword: "overseaTravel", chartType: "Pie" },
    { label: "Oversea Location", keyword: "overseaLocation", chartType: "Pie" },
    {
      label: "Sex (by notified date: recent 14 days)",
      keyword: "sex",
      chartType: "Bar",
    },
    {
      label: "DHB (by notified date: recent 14 days)",
      keyword: "DHB",
      chartType: "Bar",
    },
    {
      label: "Age Group (by notified date: recent 14 days)",
      keyword: "ageGroup",
      chartType: "Bar",
    },
    {
      label: "Oversea Location (by notified date: recent 14 days)",
      keyword: "overseaLocation",
      chartType: "Bar",
    },
  ];

  return (
    <React.Fragment>
      <TitleDrawerSelector titles={titles} title={title} setTitle={setTitle} />
      <div style={{ height: "600px" }}>
        <CaseDetailChart
          chartType={title.chartType}
          aggregationKey={title.keyword}
          rawData={rawData.confirmedCases}
        />
      </div>
    </React.Fragment>
  );
};

export default ConfirmedCase;
