// src/components/ai/Annotate.tsx
import React from "react";
import { AnnotateProps } from "../../types/ai/annotation"; // import the type

const Annotate: React.FC<AnnotateProps> = ({ filters }) => {
  // Use filters in the component as needed
  return (
    <div className="annotate-container">
      <h2 className="text-xl font-semibold mb-4">Annotate Data</h2>
      {/* Display annotation form or options based on the filters */}
      <p>
        Annotating data from {filters.dateFrom} to {filters.dateTo}
      </p>
      {/* Add annotation UI elements like buttons or forms here */}
    </div>
  );
};

export default Annotate;
