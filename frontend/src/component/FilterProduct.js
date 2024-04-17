import { CiForkAndKnife } from "react-icons/ci";

export const FilterProduct = ({ category, onClick }) => {
  return (
    <div onClick={onClick}>
      <div className="text-3xl p-5 bg-yellow-500 rounded-full">
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </div>
  );
};
