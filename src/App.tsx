import { useState } from "react";
import USForm from "./components/USForm";
import MetricsForm from "./components/MetricsForm";

function App() {
  const [units, setUnits] = useState("us");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center border border-gray-300 p-4 rounded-lg shadow-lg gap-y-4 bg-white">
        <label className="mb-2 text-lg font-medium text-gray-700">
          Units:
          <select
            id="units"
            name="units"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="ml-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="us">US Units (ft/ lbs)</option>
            <option value="metric">Metric Units (cm/ kg)</option>
          </select>
        </label>
        {units === "us" ? <USForm /> : <MetricsForm />}
      </div>
    </div>
  );
}

export default App;
