// src/types/ai/annotation.ts
export interface Filters {
  site: string;
  sensor: string;
  dateFrom: string;
  dateTo: string;
  timeFrom: string;
  timeTo: string;
}

// Props for components that will use filters
export interface ChartProps {
  filters: Filters;
}

export interface AIAnalysisProps {
  filters: Filters;
}

export interface AnnotateProps {
  filters: Filters;
}

export interface AnnotatedListProps {
  filters: Filters;
}

export interface AnnotatedData {
  site: string;
  sensor: string;
  date: string;
  time: string;
  value: number;
  [key: string]: string | number; // Allowing for other properties that may exist in your data
}
