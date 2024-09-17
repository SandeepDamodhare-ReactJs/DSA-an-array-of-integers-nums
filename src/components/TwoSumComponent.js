
import React, { useState } from 'react';

const TwoSumComponent = () => {
  const [nums, setNums] = useState([2, 7, 11, 15]);
  const [target, setTarget] = useState(9);
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState('');

  const findTwoSum = (arr, target) => {
    const numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];

      if (numMap.has(complement)) {
        return [numMap.get(complement), i]; 
      }

      numMap.set(arr[i], i);
    }

    return null;
  };

  const handleFindTwoSum = () => {
    const result = findTwoSum(nums, target);
    setResult(result);
  setMessage(result ? '' : 'No solution found.');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Two Sum Problem Solver</h1>
      <p>Array: {JSON.stringify(nums)}</p>
      <p>Target: {target}</p>
      <button onClick={handleFindTwoSum}>Find Two Sum</button>
      {result ? (
        <p>Indices of the two numbers: {JSON.stringify(result)}</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default TwoSumComponent;







