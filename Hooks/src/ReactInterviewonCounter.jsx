import React, { useState } from 'react';

const ReactInterviewonCounter = () => {
  // Initial value of the counter is 10
  const [value, setValue] = useState(10);

  // ❌ This method demonstrates incorrect usage.
  // Even though setValue is called 4 times, the state only updates by 1.
  const incorrectAddValue = () => {
    // All 4 lines below will use the same value (e.g., 10)
    // React batches these updates and treats them as the same: setValue(11)
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    // Final result: only +1 (from 10 to 11)
  };

  // ✅ This method demonstrates the correct usage of setValue
  // It uses the functional form which accesses the latest state
  const correctAddValue = () => {
    // Each update here uses the previous value from the last update
    setValue(prev => prev + 1); // 10 → 11
    setValue(prev => prev + 1); // 11 → 12
    setValue(prev => prev + 1); // 12 → 13
    setValue(prev => prev + 1); // 13 → 14
    // Final result: +4 (from 10 to 14)
  };

  return (
    <>
      <p>Counter value: {value}</p>

      {/* Button using incorrect approach (will only increment by 1) */}
      <button onClick={incorrectAddValue}>Add Value (Incorrect Way)</button>

      {/* Button using correct approach (will increment by 4) */}
      <button onClick={correctAddValue}>Add Value (Correct Way)</button>
    </>
  );
};

export default ReactInterviewonCounter;
