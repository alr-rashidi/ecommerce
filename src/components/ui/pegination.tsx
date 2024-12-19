import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type PeginationPropsType = {
  page: number;
  handlePageChange: (newPage: number) => void;
  totalPages: number;
} & React.HTMLAttributes<HTMLDivElement>;
const Pegination = ({
  page,
  handlePageChange,
  totalPages,
  className,
}: PeginationPropsType) => {
  return (
    <div className={`flex justify-center items-center gap-2 ${className}`}>
      <button
        className="flex items-center justify-center text-sm font-bold text-neutral-500 disabled:opacity-30 rounded aspect-square size-6"
        onClick={() => handlePageChange(page - 1)}
        disabled={page == 1}
      >
        <FaChevronLeft onClick={() => handlePageChange(page - 1)} />
      </button>
      {page > 3 && (
        <button
          className="text-sm font-bold bg-secondary text-primary rounded aspect-square text-center size-8"
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      )}
      {page > 3 && <div className="px-2 select-none">...</div>}
      {page == 3 && (
        <button
          className="text-sm font-bold bg-secondary text-primary rounded aspect-square text-center size-8"
          onClick={() => handlePageChange(page - 2)}
        >
          {page - 2}
        </button>
      )}
      {page > 1 && (
        <button
          className="text-sm font-bold bg-secondary text-primary rounded aspect-square text-center size-8"
          onClick={() => handlePageChange(page - 1)}
        >
          {page - 1}
        </button>
      )}
      <button className="text-sm font-bold bg-primary text-secondary rounded aspect-square text-center size-8">
        {page}
      </button>
      {page < totalPages && (
        <button
          className="text-sm font-bold bg-secondary text-primary rounded aspect-square text-center size-8"
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </button>
      )}
      {page < totalPages - 2 && <div className="px-2 select-none">...</div>}
      {page < totalPages - 1 && (
        <button
          className="text-sm font-bold bg-secondary text-primary rounded aspect-square text-center size-8"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}
      <button
        className="flex items-center justify-center text-sm font-bold text-neutral-500 disabled:opacity-30 rounded aspect-square size-6"
        onClick={() => handlePageChange(page + 1)}
        disabled={page == totalPages || totalPages == 0}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pegination;
