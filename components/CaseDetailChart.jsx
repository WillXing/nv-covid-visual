import PieChart from "./PieChart";
import BarChart from "./BarChart";
import useCaseDetailAggregation from "../hooks/useCaseDetailAggregation";
import useCaseDetailAggregationByDate from "../hooks/useCaseDetailAggregationByDate";

const CaseDetailChart = ({ chartType, aggregationKey, rawData }) => {
  const data = useCaseDetailAggregation(aggregationKey, rawData);
  const [barData, keys] = useCaseDetailAggregationByDate(
    "dateNotified",
    aggregationKey,
    rawData
  );
  return (
    <React.Fragment>
      {chartType === "Pie" ? <PieChart data={data} /> : null}
      {chartType === "Bar" ? (
        <BarChart data={barData} keys={keys} label={aggregationKey} />
      ) : null}
    </React.Fragment>
  );
};

export default CaseDetailChart;
