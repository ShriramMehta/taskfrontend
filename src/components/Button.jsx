import { FaSpinner } from "react-icons/fa";
import clsx from "clsx";

export default function Button({ children, className, loading, onClick }) {
  return (
    <button
      className={clsx(
        "w-full bg-textred h-12 rounded-lg font-normal text-white hover:bg-red-400 relative cursor-pointer",
        className
      )}
      onClick={onClick}
      disabled={loading}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <FaSpinner className="animate-spin" />
        </span>
      )}
      {!loading && children}
    </button>
  );
}
