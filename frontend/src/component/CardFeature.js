import { Link } from "react-router-dom";
import { addCartItem} from "../redux/productSlice";
import { useDispatch } from "react-redux";
export const CardFeature = ({
  image,
  name,
  price,
  category,
  loading,
  id,
}) => {
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
       
      })
    );
  };
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 flex flex-col">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center overflow-hidden">
              <img src={image} alt={name} className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg my-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-500 font-medium">{category}</p>
            <p className="font-bold">
              <span className="text-red-500">$</span>
              <span>{price}</span>
            </p>{" "}
          </Link>
          <button
            className="bg-red-500 py-1 mt-2 rounded hover:bg-red-700 w-full text-white"
            onClick={handleAddCartProduct}
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};
