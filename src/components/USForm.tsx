import { useState } from "react";

function USForm() {
  const [age, setAge] = useState(25);
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(7);
  const [weight, setWeight] = useState(150);
  const [bmi, setBmi] = useState(0);

  function calculateBmi() {
    let totalHeight = feet * 12 + inches;
    setBmi((weight * 703) / (totalHeight * totalHeight));
  }

  return (
    <div className="flex flex-col justify-center items-center bg-slate-100 p-6 rounded-lg shadow-md gap-y-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Imperial Units</h2>

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

      <div className="w-full flex gap-x-4">
        <label className="w-full">
          <span className="block text-gray-700 mb-1">Feet</span>
          <input
            type="number"
            placeholder="Feet"
            value={feet}
            onChange={(e) => setFeet(parseInt(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="w-full">
          <span className="block text-gray-700 mb-1">Inches</span>
          <input
            type="number"
            placeholder="Inches"
            value={inches}
            onChange={(e) => setInches(parseInt(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>

      <label className="w-full">
        <span className="block text-gray-700 mb-1">Weight (pounds)</span>
        <input
          type="number"
          placeholder="Weight in pounds"
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

export default USForm;
