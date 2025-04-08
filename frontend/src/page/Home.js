import { CardFeature } from "../component/CardFeature";
import { HomeCard } from "../component/HomeCard";
import { useSelector } from "react-redux";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
import bike from "../assets/2972185.png";
import { FilterProduct } from "../component/FilterProduct";
import { AllProduct } from "../component/AllProduct";

export const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(0, 4);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "Special Cake",
    []
  );
  console.log(homeProductCartListVegetables);
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img src={bike} className="h-7" />
          </div>
          <h2 className="text-4xl font-bold md:text-7xl py-3">
            The Fasted Delivery Cake in{" "}
            <span className="text-red-600">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Indulge in the sweet delights of our cake delivery house services.
            From decadent chocolate creations to light and fluffy confections,
            we offer a delightful assortment of cakes delivered straight to your
            doorstep. Whether you're celebrating a special occasion or simply
            craving a treat, our expertly crafted cakes are baked with love and
            care, using only the finest ingredients. With convenient online
            ordering and swift delivery, satisfying your sweet tooth has never
            been easier. Elevate any moment with a slice of happiness from our
            cake delivery house.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order now
          </button>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>
      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Special Cake
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-2 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "Special Cake"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "CartLoading"} />
              ))}
        </div>
      </div>
      <AllProduct heading={"Your product"} />
    </div>
  );
};
