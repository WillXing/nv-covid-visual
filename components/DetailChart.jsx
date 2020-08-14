import useCaseDetailAggregation from "../hooks/useCaseDetailAggregation";
import PieChart from "./PieChart";

const DetailChart = ({ chartType, aggregationKey, rawData }) => {
  const data = useCaseDetailAggregation(aggregationKey, rawData);
  return (
    <React.Fragment>
      {chartType === "Pie" ? <PieChart data={data} /> : null}
    </React.Fragment>
  );
};

export default DetailChart;
