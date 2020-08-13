import { useState, useEffect } from "react";
import rawData from "../data/data.json";
import PieChart from "./PieChart";

const ProbableCaseChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ageGroupData = rawData.probableCases.reduce(
      (result, confirmedCase) => {
        // Char 160 to char 32
        // Char 160 is non-break space
        const ageGroup = confirmedCase.ageGroup.trim().replace(/ /g, " ");
        const existAgeGroup = result.find((item) => item.id === ageGroup);
        if (existAgeGroup !== undefined) {
          existAgeGroup.value = existAgeGroup.value + 1;
        } else {
          result.push({
            id: ageGroup,
            label: ageGroup,
            value: 1,
          });
        }
        return result;
      },
      []
    );
    setData(ageGroupData);
  }, []);

  return <PieChart data={data} />;
};

export default ProbableCaseChart;
