import { useState } from "react";

function MetricsForm() {
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [bmi, setBmi] = useState(0);

  const calculateBmi = () => {
    if (height > 0) {
      setBmi((weight * 10000) / (height * height));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 p-6 rounded-lg shadow-md gap-y-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Metrics Units</h2>

      <label className="w-full">
        <span className="block text-gray-700 mb-1">Age</span>
        <input
          type="number"
          placeholder="Age: 2 - 100"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="w-full">
        <span className="block text-gray-700 mb-1">Height (cm)</span>
        <input
          type="number"
          placeholder="Height in centimeters"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="w-full">
        <span className="block text-gray-700 mb-1">Weight (kg)</span>
        <input
          type="number"
          placeholder="Weight in kilograms"
          value={weight}
          onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <button
        onClick={calculateBmi}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Calculate BMI
      </button>

      {bmi > 0 && (
        <div className="mt-4 text-lg font-medium text-green-700">
          BMI: {bmi.toFixed(2)} kg/m²
        </div>
      )}
    </div>
  );
}

export default MetricsForm;
