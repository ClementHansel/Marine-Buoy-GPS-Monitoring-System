import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <div className="relative flex items-center group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex w-max max-w-xs px-3 py-1 text-sm text-white bg-gray-900 rounded-lg shadow-lg">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
