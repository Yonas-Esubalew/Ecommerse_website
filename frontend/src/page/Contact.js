import React from "react";
export const Contact = () => {
  return (
    <div className="p-3 md:p-4">
      <div className="text-center justify-center">
      <h3 className="font-bold text-xl">Ask Me Any Question</h3>
      <h1 className="text-4xl font-bold md:text-5xl py-3 text-red-600">Contact Me</h1>
      </div>
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        <div className="w-38 overflow-hidden drop-shadow-md shadow-md m-auto">
          <img src="" className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col">
          <label htmlFor="email" className="mb-1">
            Your Name
          </label>
          <input
            type={"text"}
            id="name"
            name="name"
            className="mt-1 mb-2 w-full bg-slate-200 rounded px-2 py-1 focus-within:outline-blue-500"
          />
          <label htmlFor="email" className="mb-1">
            Your Email
          </label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 rounded px-2 py-1 focus-within:outline-blue-500"
          />
          <label htmlFor="email" className="mb-1">
            Your Address
          </label>
          <input
            type={"text"}
            id="address"
            name="address"
            className="mt-1 mb-2 w-full bg-slate-200 rounded px-2 py-1 focus-within:outline-blue-500"
          />
          <label htmlFor="email" className="mb-1">
            Phone Number
          </label>
          <input
            type={"number"}
            id="number"
            name="number"
            className="mt-1 mb-2 w-full bg-slate-200 rounded px-2 py-1 focus-within:outline-blue-500"
          />
          <label htmlFor="email" className="mb-1">
            Send Message
          </label>
          <textarea
            type={"number"}
            id="number"
            name="number"
            placeholder="write your comments..."
            className="mt-1 mb-2 w-full bg-slate-200 rounded px-2 py-1 focus-within:outline-blue-500"
          />
          <button
            type="submit"
            className=" m-auto max-w-[150px] w-full bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
