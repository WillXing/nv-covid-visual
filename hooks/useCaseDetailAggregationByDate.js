import { useState, useEffect } from "react";
const moment = require("moment");

const useCaseDetailAggregationByDate = (dateKey, aggregationKey, rawData) => {
  const [dataByDate, setDataByDate] = useState([]);
  const [finalKeys, setFinalKeys] = useState([]);
  useEffect(() => {
    const data = [];
    const keys = [];
    for (let index = 14; index >= 1; index--) {
      const date = new Date(
        moment().add(-index, "days").format()
      ).toLocaleDateString();

      const aggDataByDate = rawData
        .filter((row) =>
          aggregationKey === "overseaLocation" ? row.overseaTravel : true
        )
        .filter((row) => {
          return new Date(row[dateKey]).toLocaleDateString() === date;
        })
        .reduce(
          (result, theCase) => {
            // Char 160 to char 32
            // Char 160 is non-break space
            const key = theCase[aggregationKey]
              .toString()
              .trim()
              .replace(/ /g, " ");

            result[key] = result[key] !== undefined ? result[key] + 1 : 1;

            keys.push(key);

            return result;
          },
          { date }
        );

      data.push(aggDataByDate);
    }
    setDataByDate(data);
    setFinalKeys([...new Set(keys)]);
    return () => {
      setDataByDate([]);
      setFinalKeys([]);
    };
  }, [aggregationKey]);
  return [dataByDate, finalKeys];
};

export default useCaseDetailAggregationByDate;
