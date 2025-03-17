// src/components/ai/AnnotatedList.tsx
import React from "react";
import { AnnotatedListProps } from "../../types/ai/annotation"; // import the type

const AnnotatedList: React.FC<AnnotatedListProps> = ({ filters }) => {
  // Use filters in the component as needed
  return (
    <div className="annotated-list-container">
      <h2 className="text-xl font-semibold mb-4">Annotated Data List</h2>
      {/* Display a list of annotations based on filters */}
      <p>Displaying annotations for sensor: {filters.sensor}</p>
      {/* Render list of annotations here */}
    </div>
  );
};

export default AnnotatedList;
