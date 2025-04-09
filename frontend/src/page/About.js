import React from "react";
import img from "../assets/logo3.webp";
export const About = () => {
  return (
    <div className=" justify-center items-center text-center flex">
      <div className="w-full h-full">
        <img src={img} alt="image" className="w-full h-full rounded-full gap-8" />
      </div>
      <div>
        <h2 className="text-4xl font-bold md:text-7xl py-3 gap-3">
          The Fasted Delivery Cake in{" "}
          <span className="text-red-600">Your Home</span>
        </h2>
        <p className="py-3 text-base">
          Indulge in Delight: Our Cake Delivery Services Bring Sweetness to Your
          Doorstep! Savor the sweetness of life without leaving your home with
          our convenient cake delivery services. Whether you're celebrating a
          special occasion or simply craving a slice of heavenly goodness, our
          online bakery has you covered. Discover a delectable array of cakes
          crafted with love and expertise by our talented bakers. From classic
          flavors like rich chocolate and velvety vanilla to exotic creations
          such as red velvet or indulgent cheesecakes, our menu offers something
          to satisfy every craving. Ordering is a piece of cake! Simply browse
          our website, select your favorite treats, and proceed to checkout.
          With just a few clicks, you can have a scrumptious dessert on its way
          to your doorstep. Need a last-minute cake for a birthday or
          anniversary? Don't worry – our express delivery option ensures that
          your sweet surprise arrives right on time, no matter the occasion.
          Experience the convenience of online cake shopping with our reliable
          delivery service. Whether you're treating yourself or sending a
          thoughtful gift to a loved one, let us make every moment sweeter with
          our irresistible cakes delivered straight to you.
        </p>
        <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};
