import { useState, useEffect } from "react";

const useCaseDetailAggregation = (aggregationKey, rawData) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const aggData = rawData
      .filter((row) =>
        aggregationKey === "overseaLocation" ? row.overseaTravel : true
      )
      .reduce((result, theCase) => {
        // Char 160 to char 32
        // Char 160 is non-break space
        const key = theCase[aggregationKey]
          .toString()
          .trim()
          .replace(/ /g, " ");
        const existKey = result.find((item) => item.id === key);
        if (existKey !== undefined) {
          existKey.value = existKey.value + 1;
        } else {
          result.push({
            id: key,
            label: key,
            value: 1,
          });
        }
        return result;
      }, []);

    setData(aggData);
  }, [aggregationKey]);
  return data;
};

export default useCaseDetailAggregation;
