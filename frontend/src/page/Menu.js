import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);

  return (
    <div>
      <div className="p-2 md:p-4">
        <div className="w-full max-w-4xl bg-slate-400 m-auto">
          <div className="w-1/2 shadow overflow-hidden">
            <img
              src={productDisplay.image}
              className="hover:scale-500 transition-all"
            />
          </div>
          <div className="">
            <h3 className="font-semibold text-slate-600 capitalize text-lg my-4 whitespace-nowrap overflow-hidden">
              {productDisplay.name}
            </h3>
            <p className=" text-slate-500 font-medium">
              {productDisplay.category}
            </p>
            <p className="font-bold">
              <span className="text-red-500">$</span>
              <span>{productDisplay.price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
