import PieChart from "../components/PieChart";
import ConfirmedCaseChart from "../components/ConfirmedCaseChart";
import ProbableCaseChart from "../components/ProbableCaseChart";
export default () => {
  return (
    <div>
      <h1>VISUAL COVID NZ</h1>
      <div style={{ height: "600px" }}>
        <ConfirmedCaseChart />
      </div>
      <div style={{ height: "600px" }}>
        <ProbableCaseChart />
      </div>
    </div>
  );
};
