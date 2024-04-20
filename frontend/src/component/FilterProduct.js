import { CiForkAndKnife } from "react-icons/ci";

export const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl p-5 bg-yellow-500 rounded-full ${
          isActive ? "md:bg-red-500 text-white" : ""
        }`}
      >
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};
