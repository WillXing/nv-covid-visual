import { useState } from "react";
import TitleDrawerSelector from "./TitleDrawerSelector";
import DetailChart from "./DetailChart";
import rawData from "../data/data.json";

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
  ];

  return (
    <React.Fragment>
      <TitleDrawerSelector titles={titles} title={title} setTitle={setTitle} />
      <div style={{ height: "600px" }}>
        <DetailChart
          chartType={title.chartType}
          aggregationKey={title.keyword}
          rawData={rawData.confirmedCases}
        />
      </div>
    </React.Fragment>
  );
};

export default ConfirmedCase;
