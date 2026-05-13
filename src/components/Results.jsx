import { calculateInvestmentResults } from "../util/investment";

export default function Results({ inputs }) {
  const resultsData = calculateInvestmentResults(inputs);

  return <p>Results will be displayed here</p>;
}
